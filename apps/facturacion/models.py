from django.db import models
from apps.base.models import BaseModelo, BaseModelo2
from apps.inventario.models import Producto
# Create your models here.
#Para los signals
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.db.models import Sum

class Cliente(BaseModelo):
    SEL='Seleccion Una Opcion:'
    NAT='Natural'
    JUR='Juridico'
    EXT='Extranjero'
    TIPO_CLIENTE = [
        (SEL,'Seleccion Una Opcion:'),
        (NAT,'Natural'),
        (JUR,'Juridica'),
        (EXT,'Extranjero')
    ]
    razon_social=models.CharField(
        max_length=100,
        unique=True
        )
    tipo=models.CharField(
        max_length=25,
        choices=TIPO_CLIENTE,
        default=SEL
    )
    rif=models.CharField(
        max_length=8

    )
    direccion=models.CharField(
        max_length=250,
        null=True, blank=True
        )
    telefono=models.CharField(
        max_length=12,
        null=True, blank=True
    )
    email=models.EmailField(
        max_length=255
    )
    def __str__(self):
        return '{}'.format(self.razon_social)

    def save(self, *args, **kwargs):
        self.razon_social = self.razon_social.upper()
        self.direccion = self.direccion.upper()
        super(Cliente, self).save( *args, **kwargs)

    class Meta:
        verbose_name_plural = "Clientes"


class FacturaEnc(BaseModelo2):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    fecha = models.DateTimeField(auto_now_add=True)
    sub_total=models.FloatField(default=0)
    descuento=models.FloatField(default=0)
    total=models.FloatField(default=0)
    pagado=models.BooleanField(default=False)
    tipo_pago=models.CharField(max_length=50,null=True, blank=True)
    user_cobra=models.CharField(max_length=50,null=True,blank=True)

    def __str__(self):
        return '{}'.format(self.id)

    def save(self):
        self.total = self.sub_total - self.descuento
        super(FacturaEnc,self).save()

    class Meta:
        verbose_name_plural = "Encabezado Facturas"
        verbose_name="Encabezado Factura"
        permissions = [
            ('sup_caja_facturaenc','Permisos de Supervisor de Caja Encabezado')
        ]
    

class FacturaDet(BaseModelo2):
    factura = models.ForeignKey(FacturaEnc,on_delete=models.CASCADE)
    producto=models.ForeignKey(Producto,on_delete=models.CASCADE)
    cantidad=models.BigIntegerField(default=0)
    precio=models.FloatField(default=0)
    sub_total=models.FloatField(default=0)
    descuento=models.FloatField(default=0)
    total=models.FloatField(default=0)
    estado=models.BooleanField(default=False)
    user_borra=models.CharField(max_length=50,null=True,blank=True)

    def __str__(self):
        return '{}'.format(self.producto)

    def save(self):
        self.sub_total = float(float(int(self.cantidad)) * float(self.precio))
        self.total = self.sub_total - float(self.descuento)
        super(FacturaDet, self).save()
    
    class Meta:
        verbose_name_plural = "Detalles Facturas"
        verbose_name="Detalle Factura"
        permissions = [
            ('sup_caja_facturadet','Permisos de Supervisor de Caja Detalle')
        ]



@receiver(post_save, sender=FacturaDet)
def detalle_fac_guardar(sender,instance,**kwargs):
    factura_id = instance.factura.id
    producto_id = instance.producto.id

    enc = FacturaEnc.objects.get(pk=factura_id)
    if enc:
        sub_total = FacturaDet.objects \
            .filter(factura=factura_id) \
            .aggregate(sub_total=Sum('sub_total')) \
            .get('sub_total',0.00)
        
        descuento = FacturaDet.objects \
            .filter(factura=factura_id) \
            .aggregate(descuento=Sum('descuento')) \
            .get('descuento',0.00)
    
        enc.sub_total = sub_total
        enc.descuento = descuento
        enc.save()

    prod=Producto.objects.filter(pk=producto_id).first()
    if prod:
        cantidad = int(prod.existencia) - int(instance.cantidad)
        prod.existencia = cantidad
        prod.save()