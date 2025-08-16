from django.urls import path
from . import views

urlpatterns = [
    path("", views.ForumsListView.as_view(), name="forums_list"),
]