
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import SignUpForm from '../components/auth/SignUpForm';
import SocialLogin from '../components/auth/SocialLogin';
import AuthLinks from '../components/auth/AuthLinks';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Welcome to our wedding family! Your account has been created successfully.');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <Header />
      
      <div className="flex items-center justify-center py-6 md:py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Join Our Wedding Family</CardTitle>
            <CardDescription>
              Begin your journey with WeddingDreams and let's create something magical together
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <SignUpForm onSubmit={handleSubmit} isLoading={isLoading} />
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or join us through</span>
              </div>
            </div>
            
            <SocialLogin />
            
            <AuthLinks />
            
            <div className="text-center text-xs text-gray-500">
              By joining our community, you agree to our{' '}
              <Link to="/terms" className="text-[#917f4f] hover:underline">
                Community Guidelines
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-[#917f4f] hover:underline">
                Privacy Promise
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignUp;
