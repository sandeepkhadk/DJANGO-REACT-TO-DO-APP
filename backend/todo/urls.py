from django.urls import path
from .views import add_todo, todo_list, update_todo,delete_todo

urlpatterns = [
    path('', todo_list, name='todo-list'),           # GET /api/todos/
    path('add/', add_todo, name='add-todo'),        # POST /api/todos/add/
    path('<int:pk>/update/', update_todo, name='update-todo'),
    path('<int:pk>/delete/', delete_todo, name='delete-todo'),
]

