
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Award, Briefcase, Building, Shield, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
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
                About <span className="text-gradient">TradeFlux</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                We're on a mission to democratize trading with powerful, accessible technology
                for traders at all experience levels.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-6">
                  Founded in 2021 by a team of traders, data scientists, and software engineers, 
                  TradeFlux was born from a simple observation: the best trading tools were 
                  inaccessible to most people.
                </p>
                <p className="text-muted-foreground mb-6">
                  We set out to create a platform that combines institutional-grade analysis with 
                  a user-friendly interface that anyone could use, regardless of their experience level.
                </p>
                <p className="text-muted-foreground">
                  Today, TradeFlux serves thousands of traders worldwide, from beginners 
                  making their first investment to professional trading firms managing 
                  substantial portfolios.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden glass-card dark:glass-card-dark shadow-2xl p-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-info/20 opacity-30 mix-blend-overlay"></div>
                  <div className="h-full w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 p-8 flex flex-col justify-center">
                    <div className="text-center mb-6">
                      <div className="inline-flex h-20 w-20 rounded-full bg-primary/10 items-center justify-center mb-4">
                        <Building className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">Est. 2021</h3>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                        <div className="text-2xl font-bold">30+</div>
                        <div className="text-sm text-muted-foreground">Team Members</div>
                      </div>
                      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                        <div className="text-2xl font-bold">200K+</div>
                        <div className="text-sm text-muted-foreground">Active Users</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-info/30 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide our decisions and shape our product
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 hover-card-animation">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe powerful trading tools should be available to everyone, 
                  not just financial institutions and professionals.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 hover-card-animation">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  We provide clear information about our data sources, methodologies, 
                  and the limitations of our tools and analysis.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 hover-card-animation">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously push the boundaries of what's possible with
                  trading technology and machine learning.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
              <p className="text-lg text-muted-foreground">
                Meet the experts behind TradeFlux
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover-card-animation">
                <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Sarah Chen</h3>
                  <p className="text-primary mb-2">Chief Executive Officer</p>
                  <p className="text-muted-foreground text-sm">
                    Former VP of Product at Bloomberg Terminal. 15+ years experience in fintech.
                  </p>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover-card-animation">
                <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                  <p className="text-primary mb-2">Chief Technology Officer</p>
                  <p className="text-muted-foreground text-sm">
                    Previously led engineering teams at Robinhood and Coinbase.
                  </p>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover-card-animation">
                <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">David Kwon</h3>
                  <p className="text-primary mb-2">Head of Research</p>
                  <p className="text-muted-foreground text-sm">
                    PhD in Computational Finance. Former quant at Jane Street Capital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-info/5 dark:from-primary/10 dark:to-info/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your trading?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of traders who are already using TradeFlux to make smarter decisions 
              and optimize their portfolios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="button-shine">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Learn More
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

export default About;
