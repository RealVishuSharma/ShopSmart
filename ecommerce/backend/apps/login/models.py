from django.db import models

# Create your models here.
class Login(models.Model):
    email = models.EmailField(50)
    password = models.CharField(max_length=40)

    class Meta: 
        db_table = 'login'

        def __str__(self):
            return self.name