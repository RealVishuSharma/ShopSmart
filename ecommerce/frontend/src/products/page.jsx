import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {  
  ShoppingBag, 
  SlidersHorizontal,
} from 'lucide-react';
import first from "../assets/first.jpg"
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";
import fifth from "../assets/fifth.jpg";
import sixth from "../assets/sixth.jpg";
import seventh from "../assets/seventh.jpg";
import eighth from "../assets/eighth.jpg";
import {useNavigate} from "react-router-dom";
import Header from '../header/page';


const ProductsPage = () => {
  // State for filters and products
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  // Sample products data
  const products = [
    { 
      id: 1, 
      name: "Minimal Chair", 
      price: 299, 
      category: "chairs",
      image: first,
    },
    { 
      id: 2, 
      name: "Modern Lamp", 
      price: 159, 
      category: "lighting",
      image: second,
    },
    { 
      id: 3, 
      name: "Wooden Table", 
      price: 499, 
      category: "tables",
      image: third,
    },
    { 
      id: 4, 
      name: "Ceramic Vase", 
      price: 89, 
      category: "decor",
      image: fourth,
    },
    { 
      id: 5, 
      name: "Lounge Chair", 
      price: 399, 
      category: "chairs",
      image: fifth,
    },
    { 
      id: 6, 
      name: "Coffee Table", 
      price: 299, 
      category: "tables",
      image: sixth,
    },
    { 
      id: 7, 
      name: "Pendant Light", 
      price: 199, 
      category: "lighting",
      image: seventh,
    },
    { 
      id: 8, 
      name: "Wall Mirror", 
      price: 149, 
      category: "decor",
      image: eighth,
    }
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => 
      (selectedCategory === "all" || product.category === selectedCategory) &&
      product.price >= priceRange[0] && 
      product.price <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    const navigate = useNavigate();

    const productDetails = () => {
      navigate("/products/details");
    }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as HomePage */}
     <Header/>

      {/* Products Section */}
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">All Products</h1>
            <p className="text-gray-600">{filteredProducts.length} products</p>
          </div>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 rounded-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Filters and Products Grid */}
        <div className="flex gap-12">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-64 shrink-0`}>
            <div className="space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-medium mb-4">Category</h3>
                <div className="space-y-2 text-white">
                  {["all", "chairs", "tables", "lighting", "decor"].map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      className="w-full justify-start rounded-full"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <div className="px-2">
                  <Slider
                    min={0}
                    max={1000}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group cursor-pointer border-0 shadow-lg" onClick={productDetails}>
                  <CardContent className="p-6">
                    <div className="overflow-hidden rounded-xl mb-6">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-600">${product.price}</p>
                        <Button variant="" size="icon">
                          <ShoppingBag className="h-5 w-5 " />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

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

export default ProductsPage;