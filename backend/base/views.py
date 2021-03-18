from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Barber
from .barbers import barbers
from .serializers import BarberSerializer

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
     routes=[
          '/api/barbers/',
          '/api/barbers/<id>',
          '/api/barbers/create',
          '/api/barbers/upload',
          '/api/barbers/delete/<id>',
          '/api/barbers/update/<id>'
     ]
     return Response(routes)

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