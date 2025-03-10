
import { 
  BarChart4, 
  LineChart, 
  Wallet, 
  Shield, 
  Zap, 
  BrainCircuit, 
  Layers, 
  Clock, 
  AlertCircle
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Advanced Charting",
      description: "Interactive charts with over 100+ technical indicators and drawing tools for comprehensive market analysis."
    },
    {
      icon: <BarChart4 className="h-5 w-5" />,
      title: "Real-Time Data",
      description: "Live market data feeds with millisecond precision for stocks, forex, cryptocurrencies, and commodities."
    },
    {
      icon: <Wallet className="h-5 w-5" />,
      title: "Portfolio Management",
      description: "Track, analyze, and optimize your investment portfolio with intuitive visualization tools."
    },
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms analyze market patterns to provide actionable trading recommendations."
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Automated Trading",
      description: "Create, backtest, and deploy algorithmic trading strategies without coding knowledge."
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Risk Management",
      description: "Advanced risk assessment tools to protect your capital and optimize position sizing."
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Multi-Asset Platform",
      description: "Trade across multiple asset classes from a single unified interface."
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Trading Alerts",
      description: "Customizable alerts for price movements, technical indicators, and market events."
    },
    {
      icon: <AlertCircle className="h-5 w-5" />,
      title: "Educational Resources",
      description: "Comprehensive learning materials to improve your trading knowledge and skills."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="absolute inset-0 grid-pattern opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for <span className="text-gradient">Modern Traders</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to analyze markets, manage risk, and execute trades with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-6 rounded-xl border border-border bg-card hover-card-animation"
            >
              <div className="absolute -top-3 -left-3 p-2 rounded-lg bg-primary text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mt-3 mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
