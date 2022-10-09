# Generated by Django 4.0.6 on 2022-10-02 21:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('facturacion', '0002_rename_celular_cliente_telefono_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='telefono',
            field=models.CharField(blank=True, max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='cliente',
            name='tipo',
            field=models.CharField(choices=[('Seleccion Una Opcion:', 'Seleccion Una Opcion:'), ('Natural', 'Natural'), ('Juridico', 'Juridica'), ('Extranjero', 'Extranjero')], default='Seleccion Una Opcion:', max_length=25),
        ),
    ]
