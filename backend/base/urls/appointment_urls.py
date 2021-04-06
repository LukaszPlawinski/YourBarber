from django.urls import path
from base.views import appointment_views as views


urlpatterns = [
     path('', views.getAppointments, name="appointments"),
     path('create', views.createAppointment, name="appointment-create"),
     path('<str:pk>', views.getAppointmentById, name="appointment"),
]