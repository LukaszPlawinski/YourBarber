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
class UserSerializer(serializers.ModelSerializer):
     name = serializers.SerializerMethodField(read_only=True)
     _id = serializers.SerializerMethodField(read_only=True)
     isBarber = serializers.SerializerMethodField(read_only=True)
     class Meta:
          model = User
          fields = ['id','isBarber','_id','name','username','email']

     def get__id(self,obj):
          return obj.id

     def get_isBarber(self,obj):
          return obj.is_staff
     def get_name(self,obj):
          name=obj.first_name
          if name == '':
               name = obj.email
          return name