# Generated by Django 3.1.7 on 2021-03-27 13:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_barber_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='service',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.service'),
        ),
    ]
