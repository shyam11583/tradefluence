
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart4, Shield, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-70"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="flex flex-col space-y-8 md:pr-8">
            <div className="inline-flex space-x-2 items-center">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Intelligent Trading
              </span>
              <span className="text-xs text-muted-foreground animate-pulse">
                New Features Available
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient">Advanced Trading</span> Platform for Modern Investors
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
              Harness the power of AI-driven analytics, real-time market data, and automated strategies to optimize your trading decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="button-shine">
                  Start Trading Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Explore Features
                </Button>
              </Link>
            </div>
            
            {/* Stats or features */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div className="flex flex-col">
                <span className="text-xl font-bold">98%</span>
                <span className="text-sm text-muted-foreground">Uptime</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">24/7</span>
                <span className="text-sm text-muted-foreground">Support</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">+200K</span>
                <span className="text-sm text-muted-foreground">Users</span>
              </div>
            </div>
          </div>
          
          {/* Hero image/visual */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden glass-card dark:glass-card-dark shadow-2xl p-1 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-info/20 opacity-30 mix-blend-overlay"></div>
              <div className="h-full w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Market Overview</h3>
                  <div className="space-x-2">
                    <Button variant="ghost" size="sm" className="h-7 px-2"><TrendingUp className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm" className="h-7 px-2"><BarChart4 className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm" className="h-7 px-2"><Shield className="h-4 w-4" /></Button>
                  </div>
                </div>
                
                {/* Simulated chart widget */}
                <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full relative">
                    <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                      <path
                        d="M0,150 L20,145 L40,148 L60,146 L80,135 L100,130 L120,120 L140,100 L160,90 L180,80 L200,70 L220,60 L240,75 L260,65 L280,50 L300,55 L320,45 L340,40 L360,30 L380,20 L400,10"
                        fill="none" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth="2"
                      />
                      <path
                        d="M0,150 L20,145 L40,148 L60,146 L80,135 L100,130 L120,120 L140,100 L160,90 L180,80 L200,70 L220,60 L240,75 L260,65 L280,50 L300,55 L320,45 L340,40 L360,30 L380,20 L400,10 L400,150 L0,150"
                        fill="url(#chartGradient)" 
                        fillOpacity="0.2"
                      />
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-background to-transparent"></div>
                  </div>
                </div>
                
                {/* Simulated trading stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="text-xs text-muted-foreground">Portfolio Value</div>
                    <div className="text-lg font-semibold">$124,758.90</div>
                    <div className="text-xs text-success">+2.4%</div>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="text-xs text-muted-foreground">Today's P&L</div>
                    <div className="text-lg font-semibold">+$3,241.50</div>
                    <div className="text-xs text-success">+4.1%</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-info/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
