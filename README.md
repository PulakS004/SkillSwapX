
# 🤝 SkillSwap - AI-Powered Skill Barter Platform

SkillSwap is an AI-driven platform that helps people exchange skills without money. You offer what you know and get what you need — all matched intelligently through semantic similarity using machine learning.

---

## 🚀 Features

- 🔄 **Barter-based skill exchange**: Match based on complementing offers and needs
- 🧠 **Semantic matching using sentence embeddings** (SentenceTransformers)
- ⚡ **Real-time nearest-neighbor search with FAISS** (IndexFlatL2)
- 📦 Backend with **Django + Django REST Framework**
- 🎨 Frontend with **React + Vite + Tailwind CSS**
- 📊 Match scores as percentages, with quality labels

---

## 🧩 How the Matching Works

We use the `all-MiniLM-L6-v2` model from [SentenceTransformers](https://www.sbert.net/) to convert each user's **offer ➝ need** pair into an embedding.

Then:
- We reverse the query (need ➝ offer) to find users whose skills complement yours.
- We store all embeddings in a FAISS `IndexFlatL2` index and perform a nearest-neighbor search.
- Matches are ranked by how **close** their vectors are in meaning (lower L2 distance = better match).
- We convert distance into a similarity percentage, and annotate it with match quality (like “Excellent Match” or “Could Be Better”).

---

## 🎥 Demo Video

https://github.com/user-attachments/assets/889f4426-7029-41ac-b08f-6363db4a2f0e

---

## 🛠️ Tech Stack

### Backend
- Python
- Django + Django REST Framework
- FAISS (Facebook AI Similarity Search)
- SentenceTransformers (all-MiniLM-L6-v2)

### Frontend
- React + Vite
- Tailwind CSS
- Axios (for API requests)

---

## 🔧 Getting Started

## 1. Backend Setup

```bash
git clone <this-repo>
cd backend/
```

### Set up virtual environment
```bash
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate
```

### Install dependencies
```bash
pip install -r requirements.txt
```

### Run migrations
```bash
python manage.py migrate
```
### Run the backend server
```bash
python manage.py runserver
```
## 2. Frontend Setup
```bash
cd frontend/
```

### Install dependencies
```bash
npm install
```

# Start the Vite development server
```bash
npm run dev
```
