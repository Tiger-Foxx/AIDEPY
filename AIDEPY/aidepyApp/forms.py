from django import forms
from aidepyApp.models import Comment, Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name','email', 'message']

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['post','name','email', 'message']