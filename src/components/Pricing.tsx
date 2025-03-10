
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Starter",
      description: "Essential tools for new traders",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Basic charts and indicators",
        "Real-time market data",
        "Portfolio tracking",
        "5 saved watchlists",
        "Daily market insights",
        "Email support"
      ]
    },
    {
      name: "Professional",
      description: "Advanced tools for serious traders",
      monthlyPrice: 79,
      annualPrice: 790,
      popular: true,
      features: [
        "Advanced charting platform",
        "100+ technical indicators",
        "Portfolio analysis tools",
        "Risk assessment features",
        "Basic automated strategies",
        "20 saved watchlists",
        "Premium market research",
        "Priority support"
      ]
    },
    {
      name: "Enterprise",
      description: "Complete solution for professionals",
      monthlyPrice: 149,
      annualPrice: 1490,
      features: [
        "Everything in Professional",
        "Advanced AI market predictions",
        "Custom strategy builder",
        "API access",
        "Multi-portfolio management",
        "Unlimited watchlists",
        "Risk optimization algorithms",
        "Dedicated account manager",
        "White-glove onboarding"
      ]
    }
  ];
  
  const togglePricing = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 grid-pattern opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent <span className="text-gradient">Pricing</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that best fits your trading needs and goals.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-secondary dark:bg-gray-800 p-1 rounded-full inline-flex items-center">
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isAnnual 
                    ? 'bg-white dark:bg-gray-700 shadow-sm' 
                    : 'text-muted-foreground'
                }`}
              >
                Annual (20% off)
              </button>
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !isAnnual 
                    ? 'bg-white dark:bg-gray-700 shadow-sm' 
                    : 'text-muted-foreground'
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border ${
                plan.popular 
                  ? 'border-primary shadow-lg shadow-primary/10' 
                  : 'border-border'
              } bg-card hover-card-animation overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-muted-foreground mt-1 mb-4">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground">
                  {isAnnual ? '/year' : '/month'}
                </span>
                
                {isAnnual && (
                  <div className="text-sm text-success font-medium mt-1">
                    Save ${(plan.monthlyPrice * 12) - plan.annualPrice} per year
                  </div>
                )}
              </div>
              
              <Button variant={plan.popular ? "default" : "outline"} className="w-full mb-6 button-shine">
                Get Started
              </Button>
              
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-primary">
                      <CheckIcon className="h-5 w-5" />
                    </div>
                    <span className="ml-3 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Need a custom plan for your organization?
          </p>
          <Button variant="link" className="mt-2">
            Contact us for enterprise pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
