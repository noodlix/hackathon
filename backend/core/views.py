import random
from django.shortcuts import render, redirect
from .models import Image, Historical_Figures
from django.http import HttpResponse, JsonResponse
from . import db_ 



def index(request):

    return render(request, 'index.html')

def get_next(request, pk):
    # current_price = request.GET.get('current_price')

    pk = int(pk)

    images = Historical_Figures.objects.filter(birth_year__gt=pk * 0.8, birth_year__lt=pk * 1.2)

    response = set()

    while len(response) != 4:
        rand = random.randint(0, len(images) - 1)
        response.add(images[rand])

    if len(images) < 4:
        #Maybe if there are not enough within a range
        pass

    return JsonResponse([{'name' : image.name, 'image_url' : image.image_url, 'birth_year' : image.birth_year, 'content' : image.content} for image in response], safe=False)


def create_db(request):
    db = db_.main()

    for figure in db:

        figure_object = Historical_Figures.objects.create(name=figure['name'], image_url=figure['image_url'], birth_year=figure['birth_year'], content=figure['content'])
        figure_object.save()
    
    return redirect('/')