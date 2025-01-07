import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingBag, Menu, Minus, Plus, Heart } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import first from "../assets/first.jpg"
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";
import fifth from "../assets/fifth.jpg";
import sixth from "../assets/sixth.jpg";
import seventh from "../assets/seventh.jpg";
import eighth from "../assets/eighth.jpg";
import Header from '../header/page';

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  
  // Mock product data
  const product = {
    name: "Minimal Chair",
    price: 299,
    description: "Crafted with precision and care, this minimal chair combines comfort with contemporary design. The sleek silhouette and natural materials make it a perfect addition to any modern space.",
    details: {
      materials: "Solid oak wood, Premium fabric upholstery",
      dimensions: "Width: 65cm, Depth: 67cm, Height: 76cm",
      care: "Wipe clean with a damp cloth, avoid direct sunlight",
      warranty: "5-year manufacturer warranty"
    },
    images: [
      seventh,
      sixth,
      fifth,
      fourth
    ],
    colors: ["Natural Oak", "Dark Walnut", "White Oak"],
    relatedProducts: [
      { name: "Modern Lamp", price: 159, image:  first},
      { name: "Ceramic Vase", price: 89, image: second },
      { name: "Wooden Table", price: 499, image: third }
    ]
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Keeping the same nav from HomePage for consistency */}
     <Header/>

      {/* Product Section */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                <img 
                  src={eighth} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`aspect-square rounded-lg overflow-hidden ${
                      selectedImage === image ? 'ring-2 ring-black' : ''
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-2xl">${product.price}</p>
              </div>

              <p className="text-gray-600 text-lg">{product.description}</p>

              {/* Color Selection */}
              <div>
                <h3 className="text-lg font-medium mb-4">Color</h3>
                <div className="flex gap-4">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 border rounded-full hover:border-black text-white"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <h3 className="text-lg font-medium mb-4">Quantity</h3>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-lg w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4">
                <Button className="flex-1 rounded-full py-6 text-lg">
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-black">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Product Details Tabs */}
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-3 gap-9">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                  <TabsTrigger value="returns">Returns</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="mt-6">
                  <div className="space-y-4 text-gray-600">
                    <p><strong>Materials:</strong> {product.details.materials}</p>
                    <p><strong>Dimensions:</strong> {product.details.dimensions}</p>
                    <p><strong>Care:</strong> {product.details.care}</p>
                    <p><strong>Warranty:</strong> {product.details.warranty}</p>
                  </div>
                </TabsContent>
                <TabsContent value="shipping" className="mt-6">
                  <div className="space-y-4 text-gray-600">
                    <p>Free shipping on orders over $500</p>
                    <p>Estimated delivery: 5-7 business days</p>
                    <p>Express shipping available at checkout</p>
                  </div>
                </TabsContent>
                <TabsContent value="returns" className="mt-6">
                  <div className="space-y-4 text-gray-600">
                    <p>30-day return policy</p>
                    <p>Free returns on unused items</p>
                    <p>Original packaging required</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-32">
            <h2 className="text-3xl font-bold mb-12 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {product.relatedProducts.map((item, index) => (
                <Card key={index} className="group cursor-pointer border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="overflow-hidden rounded-xl mb-6">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-medium mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-lg">${item.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as HomePage */}
      <footer className="py-16 border-t">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            <div>
              <h3 className="font-bold mb-6 text-lg">Shop</h3>
              <div className="space-y-4">
                <a href="#" className="block text-gray-600 hover:text-gray-900">New Arrivals</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Best Sellers</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Collections</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-lg">About</h3>
              <div className="space-y-4">
                <a href="#" className="block text-gray-600 hover:text-gray-900">Our Story</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Careers</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Press</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-lg">Support</h3>
              <div className="space-y-4">
                <a href="#" className="block text-gray-600 hover:text-gray-900">FAQ</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Shipping</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Returns</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-lg">Contact</h3>
              <div className="space-y-4">
                <p className="text-gray-600">Email: support@mono.com</p>
                <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t text-center text-gray-600">
            <p>&copy; 2024 MONO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetailPage;
