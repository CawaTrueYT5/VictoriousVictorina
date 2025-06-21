from django.db import models

class Victorina(models.Model):
    topics = models.TextField()
    questions = models.TextField()