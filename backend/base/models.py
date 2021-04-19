from django.db import models
from django.contrib.auth.models import User


# Client model

class Service(models.Model):
     user = models.ForeignKey(User, on_delete=models.SET_NULL,null=True)
     serviceName = models.CharField(max_length= 200,null = True, blank = True)
     price = models.DecimalField(max_digits=7, decimal_places=2,null = True, blank = True)
     _id = models.AutoField(primary_key=True,editable=False)
     
     def __str__(self):
          return self.serviceName

class Barber (models.Model):
     user = models.OneToOneField(User, on_delete=models.CASCADE,null=True)
     image = models.ImageField(null=True,blank=True)
     nickname = models.CharField(max_length=200, null=True,blank=True)
     description= models.TextField(null=True,blank=True)
     salary=models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
     hiredAt= models.DateTimeField()
     _id = models.AutoField(primary_key=True,editable=False)

     def __str__(self):
          return self.nickname


class Appointment (models.Model):
     user =  models.ForeignKey(User, on_delete=models.SET_NULL,null=True)
     barber = models.ForeignKey(Barber, on_delete=models.SET_NULL,null=True)
     service = models.ForeignKey(Service, on_delete=models.SET_NULL,null=True)
     date = models.DateTimeField()
     isPayed = models.BooleanField()
     paymentType = models.CharField(max_length=200, null=False,blank=False)
     paidAt = models.DateTimeField()
     _id = models.AutoField(primary_key=True,editable=False)

     def __str__(self):
          return self.date.strftime("%m/%d/%Y, %H:%M:%S")