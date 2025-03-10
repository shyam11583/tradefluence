
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Clock, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // For demo purposes, just show a toast
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
    
    // Reset the form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      detail: "support@tradeflux.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Office",
      detail: "123 Market Street",
      description: "San Francisco, CA 94105"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Hours",
      detail: "Monday - Friday",
      description: "9:00am - 5:00pm PST"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with TradeFlux?",
      answer: "Simply sign up for a free 14-day trial on our website. You'll get immediate access to all features and can explore the platform at your own pace. No credit card required for the trial."
    },
    {
      question: "Can I connect my brokerage account?",
      answer: "Yes, TradeFlux supports integration with major brokerages including TD Ameritrade, Interactive Brokers, Robinhood, and more. This allows for seamless trade execution directly from our platform."
    },
    {
      question: "Is my data secure on TradeFlux?",
      answer: "Absolutely. We use bank-level encryption and security protocols to ensure your data and personal information is always protected. We never share your data with third parties without your explicit consent."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no questions asked. Your access will continue until the end of your current billing period."
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
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                We're here to help with any questions about our platform or services
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Cards */}
        <section className="py-8 relative -mt-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover-card-animation"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                  <p className="font-medium mb-1">{info.detail}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form & Map */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will get back to you promptly
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      value={subject} 
                      onChange={(e) => setSubject(e.target.value)} 
                      required 
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      required 
                      placeholder="Provide details about your inquiry..."
                      rows={5}
                    />
                  </div>
                  
                  <div>
                    <Button type="submit" className="w-full button-shine">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
              
              <div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
                  {/* This would be a map in a real implementation */}
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive Map Would Be Here</p>
                  </div>
                </div>
                
                <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Need immediate assistance?</h3>
                  <p className="text-muted-foreground mb-4">
                    Our live support team is available to help you with any urgent questions.
                  </p>
                  <Button variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Start Live Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find quick answers to common questions about our platform
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid gap-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-2">
                  Don't see your question here?
                </p>
                <Button variant="link" size="sm">
                  Visit our comprehensive help center
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
