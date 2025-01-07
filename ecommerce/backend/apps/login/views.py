from django.http import JsonResponse
from apps.accounts import models
import json
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
@csrf_exempt
def LoginView(request):
    if request.method == 'POST':
        try: 
            data = json.loads(request.body)       # Extract data from the request
            if 'email' not in data or 'password' not in data:
                    return JsonResponse({'error': 'Missing required fields: email or password!'}, status=400)
            exists = models.Accounts.objects.filter(email = data['email']).exists()
            if exists:
                    return JsonResponse({'Response':"Logged IN!"})
            else:
                    return JsonResponse({'error': "Account doesn't exists!"}, status=400)
        except json.JSONDecodeError:
            # Handle invalid JSON format
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
