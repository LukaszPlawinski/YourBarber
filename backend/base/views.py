from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .barbers import barbers


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

def getBarbers(request):
     return JsonResponse(barbers,safe=False)