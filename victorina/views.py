from django.shortcuts import render
from django.views.generic import ListView
from .models import Victorina

class VictorinasListView(ListView):
    model = Victorina
    context_object_name = "victorinas"