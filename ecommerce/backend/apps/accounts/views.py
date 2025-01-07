from django.http import JsonResponse
from .models import Accounts
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def AccountView(request):
    if request.method == 'POST':
        try:
              data = json.loads(request.body)  # Extract data from the request
              if 'name' not in data or 'email' not in data:
                    return JsonResponse({'error': 'Missing required fields: name or email'}, status=400)
              exists = Accounts.objects.filter(email = data['email']).exists()
              if exists:
                  return JsonResponse({'error':"Account exists!"}, status=400)
              else:
                  # Create and save a MongoDB document using the ORM
                  my_instance = Accounts(name=data['name'], email=data['email'], password=data['password'])
                  my_instance.save()
              return JsonResponse({'message': 'Data saved successfully!'})
        except json.JSONDecodeError:
            # Handle invalid JSON format
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
     

    if request.method == 'GET':
      data = list(Accounts.objects.all().values())
      return JsonResponse({'data' : data}, safe=False)

    return JsonResponse({'error' :'Invalid Account'}, status=405)
    
