from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Barber


class BarberSerializer(serializers.ModelSerializer):
     class Meta:
          model = Barber
          fields = '__all__'