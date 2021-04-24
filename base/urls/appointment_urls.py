from django.urls import path
from base.views import appointment_views as views


urlpatterns = [
     path('', views.getAppointments, name="appointments"),
     path('create', views.createAppointment, name="appointment-create"),
     path('createPaymentIntent', views.createPaymentIntent, name="payment-intent"),
     path('myappointments', views.getMyAppointments, name="my-appointments"),
     path('<str:pk>', views.getAppointmentById, name="appointment"),
]