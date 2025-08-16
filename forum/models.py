from django.db import models

class Forum(models.Model):
    title = models.CharField(max_length=30)
