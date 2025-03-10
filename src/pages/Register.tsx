
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // For demo purposes, just show a toast
    toast({
      title: "Account created successfully",
      description: "Welcome to TradeFlux! Your journey begins now.",
    });
  };

  // Password strength check (basic implementation)
  const getPasswordStrength = () => {
    if (!password) return { strength: 0, label: '' };
    
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    const labels = ['Weak', 'Fair', 'Good', 'Strong'];
    return { strength, label: labels[strength - 1] || '' };
  };
  
  const passwordStrength = getPasswordStrength();

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col">
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
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-muted-foreground mt-2">Start your trading journey with TradeFlux</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <Input 
                id="name" 
                type="text" 
                placeholder="John Doe" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            
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
              <label htmlFor="password" className="text-sm font-medium">Create Password</label>
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
              
              {password && (
                <div className="mt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs">Password strength:</span>
                    <span className={`text-xs font-medium ${
                      passwordStrength.strength >= 3 ? 'text-success' : 
                      passwordStrength.strength >= 2 ? 'text-warning' :
                      'text-destructive'
                    }`}>
                      {passwordStrength.label}
                    </span>
                  </div>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        passwordStrength.strength >= 3 ? 'bg-success' : 
                        passwordStrength.strength >= 2 ? 'bg-warning' :
                        passwordStrength.strength >= 1 ? 'bg-destructive' : ''
                      }`}
                      style={{ width: `${(passwordStrength.strength / 4) * 100}%` }}
                    ></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="flex items-center space-x-1 text-xs">
                      <CheckCircle2 className={`h-3 w-3 ${password.length >= 8 ? 'text-success' : 'text-muted-foreground'}`} />
                      <span>At least 8 characters</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs">
                      <CheckCircle2 className={`h-3 w-3 ${/[A-Z]/.test(password) ? 'text-success' : 'text-muted-foreground'}`} />
                      <span>Uppercase letter</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs">
                      <CheckCircle2 className={`h-3 w-3 ${/[0-9]/.test(password) ? 'text-success' : 'text-muted-foreground'}`} />
                      <span>Number</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs">
                      <CheckCircle2 className={`h-3 w-3 ${/[^A-Za-z0-9]/.test(password) ? 'text-success' : 'text-muted-foreground'}`} />
                      <span>Special character</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-start space-x-2 mt-4">
              <Checkbox 
                id="terms" 
                checked={acceptTerms} 
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)} 
                className="mt-1"
              />
              <div>
                <label 
                  htmlFor="terms" 
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  I accept the
                </label>
                {' '}
                <Link to="/terms" className="text-sm text-primary hover:underline">
                  Terms of Service
                </Link>
                {' '}
                <span className="text-sm font-medium">and</span>
                {' '}
                <Link to="/privacy" className="text-sm text-primary hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full mt-4 button-shine"
              disabled={!acceptTerms}
            >
              Create Account
            </Button>
            
            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account?</span>
              {' '}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
      
      {/* Right Side - Banner */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-info to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xs"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-lg text-white">
            <h2 className="text-3xl font-bold mb-4">Join thousands of successful traders</h2>
            <p className="mb-6">
              TradeFlux provides cutting-edge tools and analytics to help you make data-driven trading decisions.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Advanced Market Analysis</h3>
                  <p className="text-sm text-white/70">Access real-time data and powerful charting tools</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Portfolio Optimization</h3>
                  <p className="text-sm text-white/70">AI-driven insights to maximize returns and minimize risk</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Automated Trading Strategies</h3>
                  <p className="text-sm text-white/70">Deploy custom algorithms without coding experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
