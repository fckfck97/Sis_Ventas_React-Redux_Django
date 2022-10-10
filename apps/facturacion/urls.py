from django.urls import path
from .views import ClienteListView,ClienteCreateView, ClienteUpdateView, ClienteDeleteView
urlpatterns = [
    path('cliente-list',ClienteListView.as_view()),
    path('cliente-create',ClienteCreateView.as_view()),
    path('cliente-update/<pk>',ClienteUpdateView.as_view()),
    path('cliente-delete/<pk>',ClienteDeleteView.as_view()),
]
