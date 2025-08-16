from django import forms
from .models import Victorina

class VictorinaForm(forms.ModelForm):
    class Meta:
        model = Victorina
        fields = ["title", "description", "topics", "questions"]