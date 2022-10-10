from rest_framework.generics import (
    ListAPIView, RetrieveAPIView, CreateAPIView,
    UpdateAPIView, DestroyAPIView
)
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView

from apps.compra.serializer import ProveedorSerializer
from .models import Proveedor
from rest_framework.response import Response
from rest_framework import status
#listar prooveedores
class ProveedorListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ProveedorSerializer
    queryset = Proveedor.objects.all()

#crear proveedor
class ProveedorCreateView(CreateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = ProveedorSerializer
    queryset = Proveedor.objects.all()

#actualizar proveedor
class ProveedorUpdateView(UpdateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = ProveedorSerializer
    queryset = Proveedor.objects.all()

    lookup_field = 'pk'

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({"success": "Proveedor Actualizado Correctamente"})

        else:
            return Response({"error": serializer.errors})

class ProveedorDeleteView(DestroyAPIView):
    permission_classes = (AllowAny, )
    queryset = Proveedor.objects.all()
