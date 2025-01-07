from django.shortcuts import HttpResponse
from django.conf import settings
from pymongo import MongoClient

# Create your views here.
def  OrderListView(request):
    return HttpResponse("<h3>Order List</h3>")


try:
    client = MongoClient(settings.DATABASES['default']['NAME'])
    client.server_info()  # Will raise an exception if not connected
    print("MongoDB is connected successfully!")
except Exception as e:
    print(f"Error connecting to MongoDB: {e}")
