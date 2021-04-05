from django.urls import path
from base.views import barber_views as views


urlpatterns = [
     path('', views.getBarbers, name="barbers"),
     path('<str:pk>', views.getBarber, name="barber"),
]