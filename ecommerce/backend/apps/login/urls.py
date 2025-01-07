from django.urls import path
from . import views

app_name = 'login'

urlpatterns = [
    path('login/', views.LoginView),
    # path('accounts/<int:pk>/', views.OrderDetailView, name='order-detail'),
    # Add more URL patterns for orders app
]