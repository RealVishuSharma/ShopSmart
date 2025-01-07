import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Lock, Mail, User, Eye, EyeOff, CheckCircle } from 'lucide-react';

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const url = "http://localhost:8000/accounts/signup/";

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add signup logic for e-commerce platform
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      const toSave = {
        name: fullName,
        email: email,
        password: password
      }

      var response  = ''
      response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(toSave)})
      // try {
        if( response && response.status == 400) {
          console.error("Account already exists!");
        }else{
          console.log("Data saved successfully!", response)
        }
        // }
      // catch () {
        // if( error.response && error.response.status == 400) {
        //   console.error("Account already exists!", error);
        // }
        // console.log("Data saved successfully")
      // }
    }
    console.log('Signup attempted', { fullName, email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl flex shadow-2xl rounded-2xl overflow-hidden">
        {/* Left Side - Product Showcase */}
        <div className="w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-12 flex flex-col justify-center">
          <div className="mb-8">
            <ShoppingCart size={64} className="mx-auto mb-4 text-white" />
            <h2 className="text-3xl font-bold text-center mb-4">Create Your Account</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <CheckCircle size={32} className="text-green-300" />
              <p className="text-lg">Exclusive Member Discounts</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle size={32} className="text-green-300" />
              <p className="text-lg">Free Shipping on First Order</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle size={32} className="text-green-300" />
              <p className="text-lg">Personalized Recommendations</p>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
          <Card className="w-full border-none shadow-none">
            <CardHeader className="text-center p-0 mb-8">
              <CardTitle className="text-3xl font-bold text-gray-800">Sign Up</CardTitle>
              <p className="text-gray-500 mt-2">Start your ShopSmart journey today</p>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="flex items-center mb-2 text-gray-700">
                    <User className="mr-2 text-indigo-600" size={20} />
                    Full Name
                  </Label>
                  <Input 
                    id="fullName"
                    type="text" 
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

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
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
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
                      placeholder="Create a strong password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pr-10"
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

                <div>
                  <Label htmlFor="confirmPassword" className="flex items-center mb-2 text-gray-700">
                    <Lock className="mr-2 text-indigo-600" size={20} />
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input 
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Repeat your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="text-indigo-600 focus:ring-indigo-500"
                    required
                  />
                  <Label htmlFor="terms" className="text-gray-600">
                    I agree to the Terms of Service and Privacy Policy
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Create Account
                </Button>
              </form>
              
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Already have an account? {' '}
                  <a 
                    href="/login" 
                    className="text-indigo-600 hover:text-indigo-800 font-semibold"
                  >
                    Sign In
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

export default SignupPage;