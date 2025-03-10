
import { useEffect, useRef } from 'react';

interface TradingViewChartProps {
  symbol?: string;
  theme?: 'light' | 'dark';
  className?: string;
}

const TradingViewChart = ({ 
  symbol = 'NASDAQ:AAPL', 
  theme = 'light',
  className = ''
}: TradingViewChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is a simplified version - the actual TradingView widget integration
    // would require the TradingView library to be loaded
    
    // Create the container element if not exist
    if (!containerRef.current) return;
    
    const existingScript = document.getElementById('tradingview-widget-script');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'tradingview-widget-script';
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = () => initializeWidget();
      
      document.head.appendChild(script);
    } else {
      initializeWidget();
    }

    function initializeWidget() {
      if (typeof window.TradingView !== 'undefined' && containerRef.current) {
        containerRef.current.innerHTML = '';
        
        // Create widget with TradingView API
        new window.TradingView.widget({
          container_id: containerRef.current.id,
          symbol: symbol,
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: theme,
          style: '1',
          locale: 'en',
          toolbar_bg: 'rgba(0, 0, 0, 0)',
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_legend: false,
          save_image: false,
          height: '100%',
          width: '100%',
          studies: ['RSI@tv-basicstudies', 'MACD@tv-basicstudies'],
          show_popup_button: true,
          popup_width: '1000',
          popup_height: '650',
        });
      }
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [symbol, theme]);

  return (
    <div 
      id="tradingview-widget-container" 
      ref={containerRef} 
      className={`w-full ${className}`}
    >
      {/* Fallback content while the chart loads */}
      <div className="w-full h-full flex items-center justify-center bg-muted">
        <p className="text-muted-foreground">Loading chart...</p>
      </div>
    </div>
  );
};

// Add a TypeScript interface for the TradingView global
declare global {
  interface Window {
    TradingView: {
      widget: any;
    };
  }
}

export default TradingViewChart;
