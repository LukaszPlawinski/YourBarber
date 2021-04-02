from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response

from base.models import Barber, Service,User
from base.barbers import barbers
from base.services import services
from base.serializers import BarberSerializer, ServiceSerializer, UserSerializer, UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
     def validate(self, attrs):
          data = super().validate(attrs)
          serializer = UserSerializerWithToken(self.user).data
          for k, v in serializer.items():
               data[k] = v

          return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# @api_view([POST])
# def registerUser(request):
#      data = request.data

#      user = User.objects.create(
#           first_name = data['name'],
#           # username = data['email']
#      )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
     user = request.user
     serializer = UserSerializer(user, many = False)
     return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
     users = User.objects.all()
     serializer = UserSerializer(users, many = True)
     return Response(serializer.data)