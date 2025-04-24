from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializer import UserSerializer

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import numpy as np
import faiss
from sentence_transformers import SentenceTransformer

# Create your views here.

@api_view(['GET'])
def get_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

embedding_model = SentenceTransformer("all-MiniLM-L6-v2")

users = [
    {"name": "Alice", "offers": "Python, Machine Learning", "needs": "UI/UX Design"},
    {"name": "Bob", "offers": "UI/UX Design, ", "needs": "Machine Learning"},
    {"name": "Charlie", "offers": "Photography, Video Editing", "needs": "Python"},
    {"name": "David", "offers": "Graphic Design, Photoshop", "needs": "Video Editing"},
]

"""
#Prepare FAISS Index
user_texts = [f"{u['offers']} -> {u['needs']}" for u in users]
user_vectors = np.array([embedding_model.encode(text) for text in user_texts])
vector_dim = user_vectors.shape[1]
index = faiss.IndexFlatL2(vector_dim)
index.add(user_vectors)""" 


@csrf_exempt
@api_view(['POST'])
def match_skills(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            user_offers = data.get("offers", "")
            user_needs = data.get("needs", "")

            if not user_offers or not user_needs:
                return JsonResponse({"error": "Both 'offers' and 'needs' fields are required"}, status=400)

            # Reverse the user query (swap offers and needs)
            reversed_query = f"{user_needs} -> {user_offers}"  
            query_vector = embedding_model.encode(reversed_query)
            
            #Fetch all users from the database
            all_users = list(User.objects.all().values("id", "name", "offers", "needs"))
            
            # Convert user data into embeddings
            user_texts = [f"{u['offers']} -> {u['needs']}" for u in all_users]
            user_vectors = np.array([embedding_model.encode(text) for text in user_texts])

            # Prepare FAISS index dynamically
            vector_dim = user_vectors.shape[1]
            index = faiss.IndexFlatL2(vector_dim)
            index.add(user_vectors)

            # Search for matches
            D, I = index.search(np.array([query_vector]), k=len(all_users))

            # Function to convert distance to percentage match
            def distance_to_percentage(distance):
                # If distance > 1, return a message instead of a percentage
                if distance > 1:
                    return "Low compatibility – keep exploring!"
                # For smaller distances, calculate match percentage
                return round(100 - (distance * 100), 2)
            
            matches = [{
                "name": all_users[i]["name"],
                "offers": all_users[i]["offers"],
                "needs": all_users[i]["needs"],
                "similarity_score": round(float(D[0][idx]), 4),
                "match_percent": distance_to_percentage(float(D[0][idx]))  # Calculate match percentage
            } for idx, i in enumerate(I[0])]


            matches.sort(key=lambda x: x["similarity_score"])  # Lower score = better match

            return JsonResponse({"matches": matches}, status=200)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON input"}, status=400)

    return JsonResponse({"error": "Only POST method is allowed"}, status=405)
