from django.db import models

class Victorina(models.Model):
    title = models.CharField(max_length=30, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    topics = models.TextField()
    questions = models.TextField()