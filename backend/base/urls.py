from django.urls import path
from . import views
urlpatterns = [
     path('',views.getRoutes,name="routes"),
     path('barbers/', views.getBarbers, name="barbers"),
     path('barbers/<str:pk>', views.getBarber, name="barber"),
     path('services/', views.getServices, name="services"),
]