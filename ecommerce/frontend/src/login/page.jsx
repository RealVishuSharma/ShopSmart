import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Lock, Mail, CheckCircle, Eye, EyeOff } from 'lucide-react';
const url = "http://localhost:8000/login/login/";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const emails = (e) => {
    setEmail(e.target.value);
    console.log(email);
  }

  const passwords = (e) => {
    setPassword(e.target.value);
    console.log(password);
  }

  const handleSubmit = async(e) => {

    const toSave = {
      email: email,
      password: password,
    }

    e.preventDefault();
    // Add login logic for e-commerce platform
    var response  = ''
    response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toSave)})
    // try {
      if( response && response.status == 400) {
        console.error("Account doesn't exists!!!");
      }else{
        console.log("Logged In successfully!", response)
      }
    console.log('Login attempted', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl flex shadow-2xl rounded-2xl overflow-hidden">
        {/* Left Side - Product Showcase */}
        <div className="w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-12 flex flex-col justify-center">
          <div className="mb-8">
            <ShoppingCart size={64} className="mx-auto mb-4 text-white" />
            <h2 className="text-3xl font-bold text-center mb-4">Welcome to ShopSmart</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <CheckCircle size={32} className="text-green-300" />
              <p className="text-lg">Personalized Shopping Experience</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle size={32} className="text-green-300" />
              <p className="text-lg">Secure Checkout</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle size={32} className="text-green-300" />
              <p className="text-lg">Quick Order Tracking</p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
          <Card className="w-full border-none shadow-none">
            <CardHeader className="text-center p-0 mb-8">
              <CardTitle className="text-3xl font-bold text-gray-800">Sign In</CardTitle>
              <p className="text-gray-500 mt-2">Access your personalized shopping dashboard</p>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="flex items-center mb-2 text-gray-700">
                    <Mail className="mr-2 text-indigo-600" size={20} />
                    Email Address
                  </Label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    onChange = {(e) => emails(e)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="password" className="flex items-center mb-2 text-gray-700">
                    <Lock className="mr-2 text-indigo-600" size={20} />
                    Password
                  </Label>
                  <div className="relative">
                    <Input 
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      className="w-full pr-10"
                      onChange = {(e) => passwords(e)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600"
                    >
                      {showPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="remember" 
                      className="text-indigo-600 focus:ring-indigo-500"
                    />
                    <Label htmlFor="remember" className="text-gray-600">Remember me</Label>
                  </div>
                  
                  <a 
                    href="/forgot-password" 
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    Forgot Password?
                  </a>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Sign In
                </Button>
              </form>
              
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  New to ShopSmart? {' '}
                  <a 
                    href="/signup" 
                    className="text-indigo-600 hover:text-indigo-800 font-semibold"
                  >
                    Create an Account
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;