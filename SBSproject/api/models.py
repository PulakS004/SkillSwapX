from django.db import models


# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100)
    offers = models.CharField(max_length = 200)
    needs = models.CharField(max_length = 200)
    
    def __str__(self):
        return self.name