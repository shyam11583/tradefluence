
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // For demo purposes, just show a toast
    toast({
      title: "Login Successful",
      description: "Welcome back to TradeFlux!",
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>
        
        <div className="max-w-md mx-auto w-full flex-grow flex flex-col justify-center">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <img src="/src/assets/logo.svg" alt="TradeFlux" className="w-8 h-8" />
              <span className="text-xl font-bold text-gradient tracking-tight">TradeFlux</span>
            </Link>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground mt-2">Sign in to your account to continue</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input 
                id="email" 
                type="email" 
                placeholder="johndoe@example.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe} 
                onCheckedChange={(checked) => setRememberMe(checked as boolean)} 
              />
              <label 
                htmlFor="remember" 
                className="text-sm font-medium leading-none cursor-pointer"
              >
                Remember me
              </label>
            </div>
            
            <Button type="submit" className="w-full button-shine">Sign In</Button>
            
            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Don't have an account?</span>
              {' '}
              <Link to="/register" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
      
      {/* Right Side - Banner */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-primary to-info relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xs"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-lg text-white">
            <h2 className="text-3xl font-bold mb-4">Take control of your trading journey</h2>
            <p className="mb-6">
              Access advanced analytics, real-time market data, and AI-driven insights to make informed trading decisions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-lg font-semibold">200K+</div>
                <div className="text-sm text-white/70">Active traders</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-lg font-semibold">$1.2B+</div>
                <div className="text-sm text-white/70">Monthly volume</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
