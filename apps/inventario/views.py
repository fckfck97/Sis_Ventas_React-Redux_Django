from rest_framework.generics import (
    ListAPIView, RetrieveAPIView, CreateAPIView,
    UpdateAPIView, DestroyAPIView
)
from .models import Categoria, SubCategoria, Producto
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import CategoriaSerializer, ProductoSerializer, SubCategoriaSerializer
from rest_framework.response import Response
# listar la categoria
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class CategoriaListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = CategoriaSerializer
    queryset = Categoria.objects.all()

# crear la categoria


class CategoriaCreateView(CreateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = CategoriaSerializer
    queryset = Categoria.objects.all()


# actualizar la categoria


class CategoriaUpdateView(UpdateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = CategoriaSerializer
    queryset = Categoria.objects.all()

    lookup_field = 'pk'

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(
            instance, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({"success": "Categoria Actualizada Correctamente"})

        else:
            return Response({"error": serializer.errors})

class CategoriaDeleteView(DestroyAPIView):
    permission_classes = (AllowAny, )
    queryset = Categoria.objects.all()
    
# listar la sub-categoria
class SubCategoriaListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = SubCategoriaSerializer
    queryset = SubCategoria.objects.all()

# crear la sub Categoria


class SubCategoriaCreateView(CreateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = SubCategoriaSerializer
    queryset = SubCategoria.objects.all()

# actualizar la subcategoria


class SubCategoriaUpdateView(UpdateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = SubCategoriaSerializer
    queryset = SubCategoria.objects.all()

    lookup_field = 'pk'

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(
            instance, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({"success": "Sub-Categoria Actualizada Correctamente"})

        else:
            return Response({"error": serializer.errors})


# listar producto
class ProductoListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()


# crear producto


class ProductoCreateView(CreateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()

# actualizar la producto


class ProductoUpdateView(UpdateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()

    lookup_field = 'pk'

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(
            instance, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({"success": "Producto Actualizado Correctamente"})

        else:
            return Response({"error": serializer.errors})
