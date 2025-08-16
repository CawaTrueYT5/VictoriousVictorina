from django.shortcuts import render
from django.views.generic import ListView
from .models import Forum

class ForumsListView(ListView):
    model = Forum
    context_object_name = "forums"
    template_name = "forum/forums_list.html"
