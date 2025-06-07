from django.shortcuts import render
from django.views.generic import ListView
from .models import Novation

def base_view(request):
    return render(request, "base.html")

class NovationsListView(ListView):
    model = Novation
    context_object_name = "novations"