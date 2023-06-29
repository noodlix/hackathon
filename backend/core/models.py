from django.db import models



class Image(models.Model):
    name = models.CharField(max_length=100, default='item')
    img_url = models.URLField(max_length=300)
    price = models.IntegerField()
