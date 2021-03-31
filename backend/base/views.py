from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Barber, Service
from .barbers import barbers
from .services import services
from .serializers import BarberSerializer, ServiceSerializer, UserSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['username'] = self.user.username
        data['email'] = self.user.email

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
     routes=[
          '/api/barbers/',
          '/api/barbers/<id>',
          '/api/barbers/create',
          '/api/barbers/upload',
          '/api/barbers/delete/<id>',
          '/api/barbers/update/<id>',
          '/api/services/',
          '/api/services/<id>',
          '/api/services/create',
          '/api/services/upload',
          '/api/services/delete/<id>',
          '/api/services/update/<id>'
     ]
     return Response(routes)

@api_view(['GET'])
def getUserProfile(request):
     user = request.user
     serializer = UserSerializer(user, many = False)
     return Response(serializer.data)


# BARBERS VIEWS

@api_view(['GET'])
def getBarbers(request):
     barbers = Barber.objects.all()
     serializer = BarberSerializer(barbers, many = True)
     return Response(serializer.data)

@api_view(['GET'])
def getBarber(request, pk):
     for i in barbers:
          if i['_id'] ==pk:
               barber=i
               break
     return Response(barber)

# SERVICES VIEWS

@api_view(['GET'])
def getServices(request):
     services = Service.objects.all()
     serializer = ServiceSerializer(services, many = True)
     return Response(serializer.data)

@api_view(['GET'])
def getService(request, pk):
     for i in services:
          if i['_id'] ==pk:
               service=i
               break
     return Response(service)