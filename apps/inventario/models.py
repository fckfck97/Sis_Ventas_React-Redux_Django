from django.db import models
from apps.base.models import BaseModelo
# Create your models here.


def img_directory_path(instance, filename):
    return 'img_product/{0}/{1}'.format(instance.title, filename)


class Categoria(BaseModelo):
    descripcion = models.CharField(
        max_length=100,
        help_text='Descripción de la Categoría',
        unique=True
    )

    def __str__(self):
        return '{}'.format(self.descripcion)

    def save(self, *args, **kwargs):
        self.descripcion = self.descripcion.upper()
        super(Categoria, self).save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "Categorias"


class SubCategoria(BaseModelo):
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    descripcion = models.CharField(
        max_length=100,
        help_text='Descripción de la Sub-Categoría'
    )

    def __str__(self):
        return '{}:{}'.format(self.categoria.descripcion, self.descripcion)

    def save(self, *args, **kwargs):
        self.descripcion = self.descripcion.upper()
        super(SubCategoria, self).save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "Sub Categorias"
        unique_together = ('categoria', 'descripcion')


class Producto(BaseModelo):
    codigo = models.CharField(
        max_length=20,
        unique=True,
        blank=True,
        null=True

    )
    codigo_barra = models.CharField(max_length=50)
    descripcion = models.CharField(
        max_length=200, help_text='Descripción del Producto')
    precio = models.FloatField(default=0)
    existencia = models.IntegerField(default=0)
    ultima_compra = models.DateField(null=True, blank=True)

    subcategoria = models.ForeignKey(SubCategoria, on_delete=models.CASCADE)
    foto = models.ImageField(
        upload_to=img_directory_path, null=True, blank=True)

    def __str__(self):
        return '{}'.format(self.subcategoria.descripcion)

    def save(self, *args, **kwargs):
        self.descripcion = self.descripcion.upper()
        super(Producto, self).save(*args, **kwargs)

    def get_foto(self):
        if self.foto:
            return self.foto.url
        return ''

    class Meta:
        verbose_name_plural = "Productos"
        unique_together = ('codigo', 'descripcion')
