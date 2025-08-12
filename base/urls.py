from django.urls import path
from . import views

urlpatterns = [
    path("", views.base_view, name="base"),
    path("novations/", views.NovationsListView.as_view(), name="novations_list"),
]