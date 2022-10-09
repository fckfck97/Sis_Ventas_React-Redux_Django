from django.urls import path
from .views import ProveedorListView,ProveedorCreateView, ProveedorUpdateView
urlpatterns = [
    path('proveedor-list',ProveedorListView.as_view()),
    path('proveedor-create',ProveedorCreateView.as_view()),
    path('proveedor-update/<pk>',ProveedorUpdateView.as_view()),
    
]
