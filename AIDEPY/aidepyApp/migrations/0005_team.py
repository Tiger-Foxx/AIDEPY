# Generated by Django 4.1.6 on 2023-08-14 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aidepyApp', '0004_alter_cv_domaine'),
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=128)),
                ('anneePoste', models.DateField(blank=True, null=True)),
                ('poste', models.CharField(max_length=128)),
                ('telephone', models.CharField(max_length=128, null=True)),
                ('twitter', models.CharField(max_length=128, null=True)),
                ('facebook', models.CharField(max_length=128, null=True)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='imagePoste')),
            ],
        ),
    ]
