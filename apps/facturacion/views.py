from rest_framework.generics import (
    ListAPIView, RetrieveAPIView, CreateAPIView,
    UpdateAPIView, DestroyAPIView
)
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from apps.facturacion.serializer import ClienteSerializer
from .models import Cliente
from rest_framework.response import Response

#listar clientes

class ClienteListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()

#crear cliente
class ClienteCreateView(CreateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()

#actualizar cliente
class ClienteUpdateView(UpdateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()

    lookup_field = 'pk'

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({"success": "Cliente Actualizado Correctamente"})

        else:
            return Response({"error": serializer.errors})
