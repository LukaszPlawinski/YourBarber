from django.db import models
from django.contrib.auth.models import User


# Client model

class Service(models.Model):
     user = models.OneToOneField(User, on_delete=models.SET_NULL,null=True)
     serviceName = models.CharField(max_length= 200,null = True, blank = True)
     price = models.DecimalField(max_digits=7, decimal_places=2,null = True, blank = True)
     
     def __str__(self):
          return self.serviceName

