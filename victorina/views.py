from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Victorina

class VictorinasListView(ListView):
    model = Victorina
    context_object_name = "victorinas"
    template_name = "victorina/victorinas_list.html"

class VictorinasCreating(ListView):
    model = Victorina
    context_object_name = "victorinas"
    template_name = "victorina/victorina_creating.html"

class VictorinaDetailView(DetailView):
    model = Victorina
    context_object_name = "victorina"
    template_name = "victorina/victorina_page.html"

class VictorinaProcessing(DetailView):
    model = Victorina
    context_object_name = "victorina"
    template_name = "victorina/victorina_processing.html"