# DJANGO-REACT-TO-DO-APP

A **full-stack Todo application** built with **Django REST Framework** for the backend and **React.js** for the frontend.  
Users can add, view, and manage tasks in a simple and intuitive interface.

---

## Features

- Create, read, and delete todos
- User authentication (Django User model)
- React frontend fetching tasks from Django REST API
- Responsive UI with React
- Simple and extendable architecture for further enhancements

---

## Technologies Used

**Backend:**

- Python 3
- Django 4.x
- Django REST Framework

**Frontend:**

- React.js
- Axios for API requests
- HTML / CSS / JS

---

## Project Structure

DJANGO-REACT-TO-DO


<img width="307" height="664" alt="image" src="https://github.com/user-attachments/assets/5222615f-dde1-47a1-9e47-798ccb1ba7c9" />


---

## Setup Instructions

### Backend (Django)

1. **Create and activate virtual environment:**

```bash
python -m venv .venv
# Linux/Mac
source .venv/bin/activate
# Windows
.venv\Scripts\activate
```

2. **Install dependencies:**
   
```bash
pip install -r requirements.txt
```

3. **Make migrations and migrate:**

```bash
python manage.py makemigrations
python manage.py migrate
```
4. **Run the server**
```bash
python manage.py runserver
```

### Frontend (React)

1. **Navigate to frontend folder:**

```bash
cd frontend
```

2. **Install dependencies:**
   
```bash
npm install
```

3. **Run the React app:**
```bash
npm start
```
