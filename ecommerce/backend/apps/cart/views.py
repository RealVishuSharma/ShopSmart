from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
@api_view(['GET'])
def cart_api(request):
    return JsonResponse({
        'message' : "Successfully connected frontend and backend!",
    })