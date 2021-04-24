from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from base.models import Barber, Service
from base.barbers import barbers
from base.services import services
from base.serializers import BarberSerializer, ServiceSerializer, UserSerializer, UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

@api_view(['GET'])
def getServices(request):
     services = Service.objects.all()
     serializer = ServiceSerializer(services, many = True)
     return Response(serializer.data)

@api_view(['GET'])
def getService(request, pk):
     service =Service.objects.get(_id=pk)
     serializer = ServiceSerializer(service,many= False)
     return Response(serializer.data)