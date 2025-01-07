from django.urls import path
from . import views

app_name = 'orders'

urlpatterns = [
    path('orders/', views.OrderListView, name='order-list'),
    # path('accounts/<int:pk>/', views.OrderDetailView, name='order-detail'),
    # Add more URL patterns for orders app
]