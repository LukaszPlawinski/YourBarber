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
