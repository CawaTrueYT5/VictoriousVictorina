from django.urls import path
from . import views

urlpatterns = [
    path("", views.VictorinasListView.as_view(), name="victorina_list")
]