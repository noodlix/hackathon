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

    figures = Historical_Figures.objects.order_by('birth_year')

    i = 0
    while figures[i].birth_year != pk:
        i += 1
    
    l = i - 4 if i - 4 >= 0 else 0
    r = i + 4 if i + 4 < len(figures) else len(figures) - 1
    
    response = set()
    while len(response) != 4:
        rand = random.randint(l, r)
        if rand == i:
            continue
        response.add(figures[rand])


    return JsonResponse([{'name' : figure.name, 'image_url' : figure.image_url, 'birth_year' : figure.birth_year, 'content' : figure.content} for figure in response], safe=False)


def create_db(request):
    db = db_.main()

    for figure in db:

        figure_object = Historical_Figures.objects.create(name=figure['name'], image_url=figure['image_url'], birth_year=figure['birth_year'], content=figure['content'])
        figure_object.save()
    
    return redirect('/')