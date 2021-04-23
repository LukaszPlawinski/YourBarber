from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from decouple import config
import stripe 
stripe.api_key = config('STRIPE_SK')

from base.models import Barber, Service,Appointment,User
from base.serializers import BarberSerializer, ServiceSerializer,AppointmentSerializer, UserSerializer, UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.utils import timezone

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAppointments(request):
     appointments = Appointment.objects.all()
     serializer = AppointmentSerializer(appointments, many = True)
     return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyAppointments(request):
     user = request.user
     if user.is_staff:
          appointments=user.barber.appointment_set.all()
     else:
          appointments=user.appointment_set.all()
     serializer = AppointmentSerializer(appointments,many= True)
     return Response(serializer.data)
@api_view(['GET'])
def getAppointmentById(request, pk):

     appointment =Appointment.objects.get(_id=pk)
     serializer = AppointmentSerializer(appointment,many= False)
     return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createAppointment(request):
     user = request.user
     data=request.data
     appointment = Appointment.objects.create(
          user = User.objects.get(id=data['user']),
          barber = Barber.objects.get(_id =data['barber']),
          date = data['date'],
          service = Service.objects.get(_id =data['service']),
          paymentType='card',
          isPayed = data['isPayed'],
          paidAt = timezone.now()
     )
     appointment.save()
     serializer = AppointmentSerializer(appointment,many= False)
     return Response(serializer.data)

@api_view(['POST'])
def createPaymentIntent(request):
     data = request.data

     paymentIntent = stripe.PaymentIntent.create(
          amount=int(data['amount'])*100,
          currency=data['currency'],
          payment_method_types=["card"],
          description=data['customer']
     )

     return Response(paymentIntent['client_secret'])
