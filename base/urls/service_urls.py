from django.urls import path
from base.views import service_views as views


urlpatterns = [

     path('', views.getServices, name="services"),
     path('<str:pk>', views.getService, name="service")
]