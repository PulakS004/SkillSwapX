from django.urls import path
from .views import get_users, create_user
from .views import match_skills

urlpatterns = [
   path('users/', get_users, name="get_user"),
   path('users/create/', create_user, name="create_user"),
   path('match/', match_skills, name="match_skills")
]