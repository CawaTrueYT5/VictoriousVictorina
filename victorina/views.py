from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Victorina

class VictorinasListView(ListView):
    model = Victorina
    context_object_name = "victorinas"

class VictorinaDetailView(DetailView):
    model = Victorina
    context_object_name = "victorina"

class VictorinaProcessing(DetailView):
    model = Victorina
    context_object_name = "victorina"