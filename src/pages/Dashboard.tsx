
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import TradingViewChart from '@/components/TradingView';
import { 
  LayoutDashboard, 
  BarChart3, 
  LineChart, 
  PieChart,
  Wallet, 
  Bell, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Search,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  DollarSign,
  Users,
  TrendingUp
} from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been signed out of your account.",
    });
  };

  // Sample portfolio data
  const portfolioData = [
    { id: 1, symbol: 'AAPL', name: 'Apple Inc.', shares: 15, price: 178.32, change: 1.42 },
    { id: 2, symbol: 'MSFT', name: 'Microsoft Corp.', shares: 10, price: 332.18, change: -0.78 },
    { id: 3, symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 5, price: 142.57, change: 2.13 },
    { id: 4, symbol: 'AMZN', name: 'Amazon.com Inc.', shares: 8, price: 177.23, change: 0.87 },
    { id: 5, symbol: 'TSLA', name: 'Tesla Inc.', shares: 12, price: 183.81, change: -1.54 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="p-2 mr-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link to="/" className="flex items-center space-x-2">
            <img src="/src/assets/logo.svg" alt="TradeFlux" className="w-8 h-8" />
            <span className="text-xl font-bold text-gradient tracking-tight">TradeFlux</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-sm w-64"
            />
          </div>
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isDarkMode ? 
              <div className="bg-primary text-white p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
              </div> : 
              <div className="bg-primary text-white p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              </div>
            }
          </button>
          
          <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
          </button>
          
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 w-64 flex-shrink-0 transition-all duration-300 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed md:static h-full md:h-auto z-20 md:translate-x-0 ${
            isSidebarOpen ? 'md:w-64' : 'md:w-20'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="p-4">
              <div className={`space-y-1 ${!isSidebarOpen && 'md:items-center'}`}>
                <Link 
                  to="/dashboard" 
                  className="flex items-center space-x-3 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-primary"
                >
                  <LayoutDashboard className="h-5 w-5" />
                  {(isSidebarOpen || !isSidebarOpen && window.innerWidth < 768) && <span>Dashboard</span>}
                </Link>
                <Link 
                  to="/charts" 
                  className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  {(isSidebarOpen || !isSidebarOpen && window.innerWidth < 768) && <span>Charts</span>}
                </Link>
                <Link 
                  to="/portfolio" 
                  className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-muted-foreground hover:text-foreground"
                >
                  <PieChart className="h-5 w-5" />
                  {(isSidebarOpen || !isSidebarOpen && window.innerWidth < 768) && <span>Portfolio</span>}
                </Link>
                <Link 
                  to="/analytics" 
                  className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-muted-foreground hover:text-foreground"
                >
                  <BarChart3 className="h-5 w-5" />
                  {(isSidebarOpen || !isSidebarOpen && window.innerWidth < 768) && <span>Analytics</span>}
                </Link>
                <Link 
                  to="/wallet" 
                  className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-muted-foreground hover:text-foreground"
                >
                  <Wallet className="h-5 w-5" />
                  {(isSidebarOpen || !isSidebarOpen && window.innerWidth < 768) && <span>Wallet</span>}
                </Link>
              </div>
            </div>
            
            <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
              <div className={`space-y-1 ${!isSidebarOpen && 'md:items-center'}`}>
                <Link 
                  to="/settings" 
                  className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-muted-foreground hover:text-foreground"
                >
                  <Settings className="h-5 w-5" />
                  {(isSidebarOpen || !isSidebarOpen && window.innerWidth < 768) && <span>Settings</span>}
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-muted-foreground hover:text-foreground w-full text-left"
                >
                  <LogOut className="h-5 w-5" />
                  {(isSidebarOpen || !isSidebarOpen && window.innerWidth < 768) && <span>Logout</span>}
                </button>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, John Doe</p>
              </div>
              <div className="flex mt-4 md:mt-0 space-x-2">
                <Button variant="outline" size="sm">
                  <Zap className="h-4 w-4 mr-2" />
                  Quick Trade
                </Button>
                <Button size="sm" className="button-shine">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Deposit Funds
                </Button>
              </div>
            </div>
            
            {/* Overview cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Portfolio Value</span>
                  <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Wallet className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-bold">$124,758.90</span>
                  <div className="flex items-center mt-1">
                    <span className="text-xs font-medium text-success flex items-center">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +2.4%
                    </span>
                    <span className="text-xs text-muted-foreground ml-2">vs last week</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Daily P&L</span>
                  <div className="h-8 w-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-success" />
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-bold">+$3,241.50</span>
                  <div className="flex items-center mt-1">
                    <span className="text-xs font-medium text-success flex items-center">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +4.1%
                    </span>
                    <span className="text-xs text-muted-foreground ml-2">vs yesterday</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Total Positions</span>
                  <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <PieChart className="h-4 w-4 text-purple-500" />
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-bold">18</span>
                  <div className="flex items-center mt-1">
                    <span className="text-xs font-medium text-destructive flex items-center">
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                      -1
                    </span>
                    <span className="text-xs text-muted-foreground ml-2">vs last week</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Available Cash</span>
                  <div className="h-8 w-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-4 w-4 text-amber-500" />
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-bold">$42,512.30</span>
                  <div className="flex items-center mt-1">
                    <span className="text-xs font-medium text-success flex items-center">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +$12,000.00
                    </span>
                    <span className="text-xs text-muted-foreground ml-2">recent deposit</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chart section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Market Analysis</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Day</Button>
                    <Button variant="outline" size="sm">Week</Button>
                    <Button variant="outline" size="sm" className="bg-primary/10">Month</Button>
                    <Button variant="outline" size="sm">Year</Button>
                  </div>
                </div>
                
                <div className="h-96 w-full">
                  <TradingViewChart 
                    theme={isDarkMode ? 'dark' : 'light'} 
                    className="h-full" 
                  />
                </div>
              </div>
            </div>
            
            {/* Portfolio table */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Portfolio Holdings</h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Symbol</th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Name</th>
                        <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">Shares</th>
                        <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">Price</th>
                        <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">Change</th>
                        <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {portfolioData.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                          <td className="py-3 px-4">
                            <div className="font-medium">{item.symbol}</div>
                          </td>
                          <td className="py-3 px-4 text-sm">{item.name}</td>
                          <td className="py-3 px-4 text-right text-sm">{item.shares}</td>
                          <td className="py-3 px-4 text-right text-sm">${item.price.toFixed(2)}</td>
                          <td className="py-3 px-4 text-right">
                            <span className={`text-xs font-medium ${item.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                              {item.change >= 0 ? '+' : ''}{item.change}%
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right font-medium">
                            ${(item.shares * item.price).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
