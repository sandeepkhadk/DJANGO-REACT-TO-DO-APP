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
DJANGO-REACT-TO-DO/
│
├── backend/ # Django backend
│ ├── backend/ # Backend project folder
│ ├── todo/ # Django app for Todo
│ ├── users/ # Django app for users/auth
│ ├── manage.py
│ └── db.sqlite3
│
├── frontend/ # React frontend
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── components/
│ │ │ ├── LoginForm.jsx
│ │ │ ├── RegisterForm.jsx
│ │ │ └── Todo.jsx
│ │ ├── App.jsx
│ │ ├── App.css
│ │ ├── index.js
│ │ ├── index.css
│ │ ├── reportWebVitals.js
│ │ └── setupTests.js
│ ├── package.json
│ └── package-lock.json
│
└── README.md

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

