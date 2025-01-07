import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag, Menu, ChevronRight } from 'lucide-react';
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";
import fifth from "../assets/fifth.jpg";
import sixth from "../assets/sixth.jpg";
import seventh from "../assets/seventh.jpg";
import eighth from "../assets/eighth.jpg";
import { useNavigate } from 'react-router-dom';
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import Header from '../header/page';

const HomePage = () => {
  const categories = [
    { name: "New Arrivals", image: first},
    { name: "Best Sellers", image: second },
    { name: "Collections", image: fourth }
  ];

  const featuredProducts = [
    { name: "Minimal Chair", price: "$299", image: third },
    { name: "Modern Lamp", price: "$159", image: fifth },
    { name: "Ceramic Vase", price: "$89", image: seventh },
    { name: "Wooden Table", price: "$499", image: eighth }
  ];

  const navigate = useNavigate();

  const shopnow = () => {
    navigate("/products")
  }

  // GSAP
  useGSAP(() => {
    gsap.from(".header" , {
      y: 1000,
      duration: 1,
      // delay : 1,

    })

    // gsap.from()
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
    <Header/>

      {/* Hero Section */}
      <section className="py-20 hero">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-6xl font-bold leading-tight max-w-4xl mb-8">Discover Modern Minimalistic Design</h1>
            <p className="text-gray-600 text-xl max-w-2xl mb-10">Curated collection of premium furniture and home decor that brings elegance to your space.</p>
            <Button className="rounded-full px-8 py-6 text-lg" onClick = {shopnow}>
              Shop Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="relative">
            <img 
              src= {sixth} 
              alt="Hero" 
              className="rounded-2xl object-cover w-full h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50 categories">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Explore our carefully curated collections</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <CardContent className="p-0 relative">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Discover our most popular items</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group cursor-pointer border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="overflow-hidden rounded-xl mb-6">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-lg">{product.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 text-lg mb-10">Subscribe to our newsletter for new products and exclusive offers.</p>
          <div className="flex gap-4 justify-center">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="rounded-full w-96"
            />
            <Button className="rounded-full px-8 text-lg">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default HomePage;