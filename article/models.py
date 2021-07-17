from django.db import models
from PIL import Image

class Article(models.Model):
  article_id = models.AutoField(auto_created=True,primary_key=True)
  title = models.CharField(max_length=20 ,help_text= 'title')
  description = models.TextField()
  image = models.ImageField(upload_to="image/",blank = True, null=True)
  catalog = models.ForeignKey('Catalog', on_delete=models.SET_NULL, null=True)

  class Meta:
    ordering = ['title', 'description','image', 'article_id']

  def __str__(self):
    return self.title

class Catalog(models.Model):
  catalog = models.CharField(max_length=20 ,help_text='catalog')
  def __str__(self):
    return self.catalog