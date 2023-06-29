import random
from django.shortcuts import render, redirect
from .models import Image
from django.http import HttpResponse, JsonResponse


def index(request):

    return render(request, 'index.html')

def get_next(request, pk):
    # current_price = request.GET.get('current_price')

    pk = int(pk)

    images = Image.objects.filter(price__gt=pk * 0.8, price__lt=pk * 1.2)

    response = set()

    while len(response) != 4:
        rand = random.randint(0, len(images) - 1)
        response.add(images[rand])

    if len(images) < 4:
        #Maybe if there are not enough within a range
        pass

    return JsonResponse([{'image_url' : image.img_url, 'price' : image.price} for image in response], safe=False)
