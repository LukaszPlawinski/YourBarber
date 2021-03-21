from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Barber, Service


class BarberSerializer(serializers.ModelSerializer):
     class Meta:
          model = Barber
          fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
     class Meta:
          model = Service
          fields = '__all__'