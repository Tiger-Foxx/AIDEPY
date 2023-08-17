from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from aidepyApp.forms import CommentForm, ContactForm
from aidepyApp.models import Cv, Post, Tag, Team,Partner
# Create your views here.


def index(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'aidepy/contact_success.html')
        else :
            return render(request, 'aidepy/contact_fail.html')
    else:
        form = ContactForm()
    post=Post.objects.all()
    cv=Cv.objects.all()
    partner=Partner.objects.all()
    team=Team.objects.all()
    return render(request,'aidepy/index.html',context={"posts":post,"Cvs":cv,"teams":team,"form":form,"partners":partner})

def about(request):
    partner=Partner.objects.all()
    return render(request,'aidepy/about.html',context={"partners":partner})

def service(request):
    partner=Partner.objects.all()
    return render(request,'aidepy/service.html',context={"partners":partner})

def blog(request):
    tag=Tag.objects.all()
    post=Post.objects.order_by('-date')
    recentPost=Post.objects.order_by('-date')[:3]
    return render(request,'aidepy/blog.html',context={"posts":post,"recentposts":recentPost,"tags":tag})


def cv(request):
    cv=Cv.objects.all()
    return render(request,'aidepy/cv.html',context={"Cvs":cv})

def team(request):
    team=Team.objects.all()
    return render(request,'aidepy/team.html',context={"teams":team})

def blogTag(request,tag):
    tags=Tag.objects.all()
    post=Post.objects.filter(theme=tag).order_by('-date')
    recentPost=Post.objects.order_by('-date')[:3]
    return render(request,'aidepy/blog.html',context={"posts":post,"recentposts":recentPost,"tag":tag,"tags":tags})


def post_detail(request,slug):
    post=get_object_or_404(Post,slug=slug)
    recentPost=Post.objects.order_by('-date')[:3]
    return render(request,'aidepy/detail.html',context={"post":post,"recentposts":recentPost})


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'aidepy/contact_success.html')
        else :
            return render(request, 'aidepy/contact_fail.html')
    else:
        form = ContactForm()
    return render(request, 'aidepy/contact.html', {'form': form})

def comment(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'aidepy/comment_success.html')
        else :
            return render(request, 'aidepy/comment_fail.html')

