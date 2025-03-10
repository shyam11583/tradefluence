
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, BarChart4, Brain, LineChart, Shield, TrendingUp, Laptop, Zap, Layers } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Advanced Technical Analysis",
      description: "Access over 100+ technical indicators and drawing tools on interactive charts to identify patterns and make informed trading decisions.",
      features: [
        "Interactive charting platform with multiple timeframes",
        "Custom indicator builder",
        "Pattern recognition algorithms",
        "Save and share chart layouts",
        "Real-time price alerts"
      ]
    },
    {
      icon: <BarChart4 className="h-6 w-6" />,
      title: "Portfolio Management",
      description: "Track, analyze, and optimize your investment portfolio with intuitive visualization tools and performance metrics.",
      features: [
        "Multi-asset portfolio tracking",
        "Performance analytics and benchmarking",
        "Risk exposure analysis",
        "Dividend and income tracking",
        "Tax reporting tools"
      ]
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Insights",
      description: "Leverage machine learning algorithms that analyze market patterns to provide actionable trading recommendations and forecasts.",
      features: [
        "Predictive price movement indicators",
        "Sentiment analysis of news and social media",
        "Anomaly detection in market behavior",
        "Personalized trading insights",
        "Automated market scanning"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Risk Management",
      description: "Implement advanced risk assessment tools to protect your capital and optimize position sizing for maximum risk-adjusted returns.",
      features: [
        "Position sizing calculator",
        "Stop-loss optimization",
        "Portfolio diversification analysis",
        "VaR (Value at Risk) calculations",
        "Risk-reward ratio visualization"
      ]
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Automated Trading",
      description: "Create, backtest, and deploy algorithmic trading strategies without coding knowledge to automate your trading process.",
      features: [
        "Visual strategy builder",
        "Historical backtesting engine",
        "Strategy optimization tools",
        "Paper trading simulator",
        "Real-time strategy monitoring"
      ]
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Multi-Asset Platform",
      description: "Trade across multiple asset classes including stocks, options, forex, cryptocurrencies, and commodities from a single unified interface.",
      features: [
        "Integrated order execution",
        "Cross-market analytics",
        "Customizable watchlists",
        "Global market data",
        "Multi-exchange connectivity"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-70"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Comprehensive trading tools and analytics designed to give you an edge in the markets
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {services.map((service, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover-card-animation">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm text-primary mb-2">KEY FEATURES:</h3>
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our platform's intuitive workflow makes it easy to analyze, plan, and execute your trades
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Analyze</h3>
                  <p className="text-sm text-muted-foreground">
                    Use our advanced charts and indicators to analyze market conditions
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 left-full w-12 h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 before:content-[''] before:absolute before:right-0 before:w-2 before:h-2 before:border-t-2 before:border-r-2 before:border-gray-200 dark:before:border-gray-700 before:rotate-45 before:-translate-y-1/2"></div>
              </div>
              
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Plan</h3>
                  <p className="text-sm text-muted-foreground">
                    Create your trading strategy and optimize risk parameters
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 left-full w-12 h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 before:content-[''] before:absolute before:right-0 before:w-2 before:h-2 before:border-t-2 before:border-r-2 before:border-gray-200 dark:before:border-gray-700 before:rotate-45 before:-translate-y-1/2"></div>
              </div>
              
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Execute</h3>
                  <p className="text-sm text-muted-foreground">
                    Place trades manually or use our automated trading system
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 left-full w-12 h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 before:content-[''] before:absolute before:right-0 before:w-2 before:h-2 before:border-t-2 before:border-r-2 before:border-gray-200 dark:before:border-gray-700 before:rotate-45 before:-translate-y-1/2"></div>
              </div>
              
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">4</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Track performance and optimize strategies for better results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from traders who have transformed their trading with our platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "The technical analysis tools and AI insights have completely changed how I approach the market. I've seen a 27% improvement in my returns since switching to TradeFlux."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Robert K.</h4>
                    <p className="text-xs text-muted-foreground">Day Trader, 3 years</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "As someone managing a small investment firm, the portfolio analytics have been invaluable. We can now offer our clients institutional-quality insights at a fraction of the cost."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Jennifer T.</h4>
                    <p className="text-xs text-muted-foreground">Portfolio Manager</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "I started trading during the pandemic and was overwhelmed by all the information. TradeFlux's user-friendly interface and educational resources helped me become profitable within months."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Marcus L.</h4>
                    <p className="text-xs text-muted-foreground">Retail Investor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-info/5 dark:from-primary/10 dark:to-info/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to elevate your trading?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial and experience the full power of our platform with no obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="button-shine">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
