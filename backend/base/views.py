from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def getRoutes(request):
     routes=[
          '/api/barbers/'
          '/api/barbers/<id>'
          '/api/barbers/create'
          '/api/barbers/upload'
          '/api/barbers/delete/<id>'
          '/api/barbers/update/<id>'
     ]
     return JsonResponse(routes,safe=False)