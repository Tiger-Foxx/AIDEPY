from django.db import models

# Create your models here.

"""
Post
-importance score #entier superieur à 1 et on met donc à zero pour épingler
-date
-title
-theme  
-image
-contenu
-blogPoster 
-joinPiece #url ou #none

"""
class Post(models.Model):
    importance = models.IntegerField(default=0)
    date=models.DateField(blank=True,null=True)
    slug=models.SlugField(max_length=128)
    title=models.CharField(max_length=128)
    theme=models.CharField(max_length=128)
    image=models.ImageField(blank=True,upload_to='imagePost',null=True)
    contenu=models.TextField(blank=True)
    blogPoster=models.CharField(max_length=128,blank=True)
    joinPiece=models.URLField(blank=True)
    
    def __str__(self):
        return f"publication de {self.blogPoster} - le : {self.date} titre : {self.title} "
        
class DomainChoice(models.TextChoices):
    GENIE_CIVIL = 'GC', 'Genie_civil'
    GENIE_INFORMATIQUE = 'GI', 'Genie_informatique'
    GENIE_MECANIQUE = 'GM', 'Genie_mécanique'
    GENIE_ELECTRIQUE = 'GE', 'Genie_électrique'
    GENIE_INDUSTRIEL = 'GIND', 'Genie_industriel'
    GENIE_FINANCIER = 'GF', 'Genie_financier'
    ART_NUMERIQUE = 'AN', 'Art_numérique'
    HUMANITE_NUMERIQUE = 'HN', 'Humanité_numérique'
    GENIE_METEO = 'GMET', 'Genie_météo'



class Cv(models.Model):
    domaine = models.CharField(max_length=128, choices=DomainChoice.choices)
    anneeSortie=models.DateField(blank=True,null=True)
    slug=models.SlugField(max_length=128)
    nom=models.CharField(max_length=128)
    telephone=models.CharField(max_length=128)
    age=models.CharField(max_length=128)
    photo=models.ImageField(blank=True,upload_to='imageCv',null=True)
    Cv=models.URLField(blank=True)
    
    def __str__(self):
        return f"CV de {self.nom} - {self.age} ans"
    



class Team(models.Model):
    nom = models.CharField(max_length=128)
    anneePoste=models.DateField(blank=True,null=True)
    poste=models.CharField(max_length=128)
    telephone=models.CharField(max_length=128,null=True)
    twitter=models.CharField(max_length=128,null=True)
    facebook=models.CharField(max_length=128,null=True)
    photo=models.ImageField(blank=True,upload_to='imagePoste',null=True)
    
    def __str__(self):
        return f"Membre {self.nom} - {self.poste}"
    
class Contact(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=128)
    message = models.TextField()
    def __str__(self):
        return f"message de {self.name}"
    
class Comment(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=128)
    post = models.CharField(max_length=128)
    message = models.TextField()
    def __str__(self):
        return f"commentaire  de {self.name} sur {self.message}" 
    
class Partner(models.Model):
    site = models.URLField()
    name = models.CharField(max_length=128)
    image = models.ImageField()
    def __str__(self):
        return f"partenaire {self.name}"   
    
class Tag(models.Model):
    slug = models.SlugField()
    name = models.CharField(max_length=128)
    def __str__(self):
        return f"Tag  {self.name}"       