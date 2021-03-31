from django.urls import path
from . import views


urlpatterns = [
     path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
     path('',views.getRoutes,name="routes"),
     path('users/profile', views.getUserProfile, name="users-profile"),
     path('barbers/', views.getBarbers, name="barbers"),
     path('barbers/<str:pk>', views.getBarber, name="barber"),
     path('services/', views.getServices, name="services"),
]