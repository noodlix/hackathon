from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/get-next/<str:pk>', views.get_next, name='get-next'),
]