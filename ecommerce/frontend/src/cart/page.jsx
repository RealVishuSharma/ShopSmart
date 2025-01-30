import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {  Minus, Plus, X } from 'lucide-react';
import { useSelector , useDispatch} from 'react-redux';

import Header from '../header/page';
import { getItemSelector, removeFromCart, updatedQuantity } from '../redux/slices/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItemSelector)


  useEffect(() => {
    const logItems = () => {
      console.log('Cart Items Updated:', items);
    }
    logItems();

    return () => {
      
    }

  }, [items]);


  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({id}));
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updatedQuantity({ id, quantity: newQuantity }));
    }
  };

  // const [cartItems, setCartItems] = useState([
    // { 
    //   id: 1, 
    //   name: "Minimal Chair", 
    //   price: 299, 
    //   quantity: 1,
    //   image: sixth
    // },
    // { 
    //   id: 2, 
    //   name: "Modern Lamp", 
    //   price: 159, 
    //   quantity: 2,
    //   image: fourth
    // }
  // ]);

  // const updateQuantity = (id, change) => {
  //   setCartItems(items =>
  //     items.map(item =>
  //       item.id === id
  //         ? { ...item, quantity: Math.max(1, item.quantity + change) }
  //         : item
  //     )
  //   );
  // };

  // const removeItem = (id) => {
  //   setCartItems(items => items.filter(item => item.id !== id));
  // };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as HomePage */}
      <Header/>

      {/* Cart Content */}
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-12">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex gap-6">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium mb-2">{item.name}</h3>
                        <p className="text-gray-600">${item.price}</p>
                      </div>
                      <Button 
                        variant="" 
                        size="icon"
                        onClick={() =>  handleRemoveItem(item.id)}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 mt-6">
                      <div className="flex items-center border rounded-full">
                        <Button 
                          variant="" 
                          size="icon"
                          onClick={() => { handleUpdateQuantity(item.id, item.quantity - 1)}}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <Button 
                          variant="" 
                          size="icon"
                          onClick={() =>  handleUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <Input 
                  placeholder="Enter promo code" 
                  className="rounded-full"
                />
                <Button className="w-full rounded-full py-6 text-lg">
                  Proceed to Checkout
                </Button>
              </div>
            </Card>
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

export default CartPage;