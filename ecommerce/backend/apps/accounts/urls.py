from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    path('signup/', views.AccountView),
    # path('accounts/<int:pk>/', views.OrderDetailView, name='order-detail'),
    # Add more URL patterns for orders app
]