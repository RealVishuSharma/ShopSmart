from django.urls import path
from . import views

app_name = 'products'

urlpatterns = [
    path('', views.add_product, name='add_product'),
    # path('accounts/<int:pk>/', views.OrderDetailView, name='order-detail'),
    # Add more URL patterns for orders app
]