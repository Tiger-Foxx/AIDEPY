# Generated by Django 4.1.6 on 2023-08-16 11:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aidepyApp', '0008_partner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='partner',
            name='image',
            field=models.ImageField(upload_to=''),
        ),
    ]