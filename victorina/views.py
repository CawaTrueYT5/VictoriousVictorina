from django.shortcuts import render, redirect
from django.views.generic import ListView, DetailView
from .models import Victorina
from .forms import VictorinaForm

class VictorinasListView(ListView):
    model = Victorina
    context_object_name = "victorinas"
    template_name = "victorina/victorinas_list.html"

def victorina_creating(request):
    if request.method == "POST":
        form = VictorinaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("victorinas_list")
    else:
        form = VictorinaForm
    return render(request, "victorina/victorina_creating.html", {"form" : form})

#class VictorinasCreating(ListView):
#    model = Victorina
#    context_object_name = "victorinas"
#    template_name = "victorina/victorina_creating.html"

class VictorinaDetailView(DetailView):
    model = Victorina
    context_object_name = "victorina"
    template_name = "victorina/victorina_page.html"

class VictorinaProcessing(DetailView):
    model = Victorina
    context_object_name = "victorina"
    template_name = "victorina/victorina_processing.html"

class VictorinaResult(DetailView):
    model = Victorina
    context_object_name = "victorina"
    template_name = "victorina/victorina_result.html"