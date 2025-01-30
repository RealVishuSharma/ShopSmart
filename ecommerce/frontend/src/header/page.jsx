import React from 'react'
import { Menu, Search, ShoppingBag } from 'lucide-react'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useNavigate} from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();

  const cartPage = () => {
    navigate("/cart")
  }

  const login = () => {
    navigate("/login")
  }

  return (
    <>
      
      {/* Navigation - Same as HomePage */}
      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold py-1">ShopSmart</h1>
            
            <div className="flex items-center justify-between w-full pb-3">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
              
              <div className="hidden md:flex space-x-16">
                <a href="#" className="text-sm hover:text-gray-600">Shop</a>
                <a href="#" className="text-sm hover:text-gray-600">Collections</a>
                <a href="#" className="text-sm hover:text-gray-600">About</a>
                <a  onClick={cartPage}  className="text-sm hover:text-gray-600">Cart</a>
                <a onClick={login} className="text-sm hover:text-gray-600">Login</a>
              </div>

              <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <Search className="h-4 w-4 text-gray-500" />
                  <Input 
                    type="text" 
                    placeholder="Search products..." 
                    className="w-72 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
                  />
                </div>
                <Button variant="" size="icon">
                  <ShoppingBag className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;
