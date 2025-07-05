from django.urls import path
from . import views

urlpatterns = [
    path("", views.VictorinasListView.as_view(), name="victorina_list"),
    path("<int:pk>/", views.VictorinaDetailView.as_view(), name="victorina_page"),
    path("<int:pk>/processing/", views.VictorinaProcessing.as_view(), name="victorina_processing"),
]