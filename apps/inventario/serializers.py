from rest_framework import serializers
from .models import Categoria, SubCategoria, Producto


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = (
            'id',
            'descripcion',
            'estado',
            'uc',
            'fc',
            'fm'
        )


class SubCategoriaSerializer(serializers.ModelSerializer):
    categoria = Categoria.objects.all()

    class Meta:
        model = SubCategoria

        fields = ('id',
                  'estado',
                  'descripcion',
                  'uc',
                  'categoria',
                  'fc',
                  'fm')


class ProductoSerializer(serializers.ModelSerializer):
    # foto=serializers.CharField(source='get_foto')
    subcategoria = SubCategoriaSerializer()
    class Meta:
        model = Producto
        fields = (
            'id',
            'codigo',
            'codigo_barra',
            'descripcion',
            'precio',
            'estado',
            'subcategoria',
            'foto'

        )
