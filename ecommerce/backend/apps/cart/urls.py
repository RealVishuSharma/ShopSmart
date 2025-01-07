from django.urls import path
from . import views

app_name = 'cart'

urlpatterns = [
    # path('cart/', views.OrderListView, name='order-list'),
    path('api/', views.cart_api, name='cart-api'),
    # path('accounts/<int:pk>/', views.OrderDetailView, name='order-detail'),
    # Add more URL patterns for orders app
]