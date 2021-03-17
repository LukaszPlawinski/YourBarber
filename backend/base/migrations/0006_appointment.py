# Generated by Django 3.1.7 on 2021-03-17 15:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0005_auto_20210317_1500'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField()),
                ('isPayed', models.BooleanField()),
                ('paymentType', models.CharField(max_length=200)),
                ('paidAt', models.DateTimeField()),
                ('barber', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.barber')),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
