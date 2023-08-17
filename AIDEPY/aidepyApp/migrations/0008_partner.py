# Generated by Django 4.1.6 on 2023-08-15 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aidepyApp', '0007_comment'),
    ]

    operations = [
        migrations.CreateModel(
            name='Partner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('site', models.URLField()),
                ('name', models.CharField(max_length=128)),
                ('image', models.CharField(max_length=128)),
            ],
        ),
    ]
