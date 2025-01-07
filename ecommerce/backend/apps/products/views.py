from django.http import JsonResponse
from .models import Product

def add_product(request):
    # Example: Adding a product programmatically
    new_product = Product.objects.create(
        name=" Super Smartphone",
        price=799.99,
        description="A powerful smartphone"
    )
    return JsonResponse({"message": "Product added", "product_id": new_product.id})
