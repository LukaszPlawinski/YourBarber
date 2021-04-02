from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from base.models import Barber, Service,Appointment
from base.serializers import BarberSerializer, ServiceSerializer,AppointmentSerializer, UserSerializer, UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from datetime import datetime
# BARBERS VIEWS

@api_view(['GET'])
def getAppointments(request):
     appointments = Appointment.objects.all()
     serializer = AppointmentSerializer(appointments, many = True)
     return Response(serializer.data)

@api_view(['GET'])
def getAppointmentById(request, pk):

     appointment =Appointment.objects.get(_id=pk)
     serializer = AppointmentSerializer(appointment,many= False)
     return Response(serializer.data)

@api_view(['POST'])
def createAppointment(request):
     # user= user
     data=request.data

     appointment = Appointment.objects.create(
          # user = user,
          barber = data['barber'],
          service = data['service'],
          isPayed = data['isPayed'],
          paidAt = datetime.now()
     )
     order.save()
     serializer = AppointmentSerializer(appointment,many= False)
     return Response(serializer.data)
