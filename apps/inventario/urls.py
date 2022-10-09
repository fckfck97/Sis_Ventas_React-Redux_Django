from xml.etree.ElementInclude import include
from django.urls import path
from .views import CategoriaListView,CategoriaCreateView, CategoriaUpdateView, CategoriaDeleteView,\
    SubCategoriaListView,SubCategoriaCreateView, SubCategoriaUpdateView, \
    ProductoListView, ProductoCreateView, ProductoUpdateView

urlpatterns = [
    path('categoria-list', CategoriaListView.as_view()),
    path('categoria-create', CategoriaCreateView.as_view()),
    path('categoria-update/<pk>', CategoriaUpdateView.as_view()),
    path('categoria-delete/<pk>', CategoriaDeleteView.as_view()),
    path('subcategoria-list', SubCategoriaListView.as_view()),
    path('subcategoria-create', SubCategoriaCreateView.as_view()),
    path('subcategoria-update/<pk>', SubCategoriaUpdateView.as_view()),
    path('producto-list', ProductoListView.as_view()),
    path('producto-create', ProductoCreateView.as_view()),
    path('producto-update/<pk>', ProductoUpdateView.as_view()),
]
