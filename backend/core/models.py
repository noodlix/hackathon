from django.db import models



class Image(models.Model):
    name = models.CharField(max_length=100, default='item')
    img_url = models.URLField(max_length=300)
    price = models.IntegerField()

class Historical_Figures(models.Model):
    name = models.CharField(max_length=100, default='Kazakh Figure')
    image_url = models.URLField()
    birth_year = models.IntegerField()
    content = models.CharField(max_length=500)

    def __str__(self) -> str:
        return self.name