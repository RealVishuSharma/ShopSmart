from django.db import models

# Create your models here.
class Accounts(models.Model):
    name = models.CharField(max_length=35)
    email = models.EmailField(50)
    password = models.CharField(max_length=40)

    class Meta: 
        db_table = 'accounts'

    def __str__(self):
        return self.name
