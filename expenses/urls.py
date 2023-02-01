from django.urls import path
from . import views


urlpatterns = [
    path('', views.home_view, name='expenses'),
    path('add-expenses/', views.add_expense, name='add-expenses')
]
