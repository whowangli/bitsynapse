import React, { useState, useEffect } from 'react';
import { 
  Network, 
  Server, 
  Shield, 
  Zap, 
  ArrowRight, 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
  Wifi,
  Home,
  Building,
  ChevronDown
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled_percentage = (winScroll / height) * 100;
      
      setIsScrolled(scrolled);
      setScrollProgress(scrolled_percentage);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const serviceType = formData.get('serviceType') as string;
    const projectDetails = formData.get('projectDetails') as string;

    const subject = `Network Consultation Request from ${name}`;
    const body = `
New consultation request from BitSynapse website:

Name: ${name}
Phone: ${phone}
Email: ${email}
Service Type: ${serviceType}
Project Details: ${projectDetails}

Please follow up within 24 hours.
    `.trim();

    const mailtoLink = `mailto:contact@bitsynapse.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/98 backdrop-blur-lg shadow-2xl border-b border-gray-200' : 'bg-white/95 backdrop-blur-sm shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/logo.svg" alt="BitSynapse" className="h-10 w-10 flex-shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">BitSynapse</span>
                <span className="text-xs text-gray-600 leading-tight hidden sm:block">IT Network Solutions Inc.</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Solutions
              </button>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center">
                  Company
                  <ChevronDown className="h-4 w-4 ml-1 transform group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <button onClick={() => scrollToSection('about')} className="w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                      Why Choose Us
                    </button>
                    <button onClick={() => scrollToSection('approach')} className="w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                      Our Approach
                    </button>
                    <button onClick={() => scrollToSection('innovation')} className="w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                      Innovation
                    </button>
                  </div>
                </div>
              </div>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Outside container for full width */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-6 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col space-y-2 items-center">
                <button onClick={() => scrollToSection('home')} className="w-full text-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium py-3 rounded-lg">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="w-full text-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium py-3 rounded-lg">
                  Solutions
                </button>
                <button onClick={() => scrollToSection('about')} className="w-full text-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium py-3 rounded-lg">
                  Why Choose Us
                </button>
                <button onClick={() => scrollToSection('approach')} className="w-full text-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium py-3 rounded-lg">
                  Our Approach
                </button>
                <button onClick={() => scrollToSection('innovation')} className="w-full text-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium py-3 rounded-lg">
                  Innovation
                </button>
                <div className="w-full border-t border-gray-200 my-2"></div>
                <button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300" 
             style={{width: `${scrollProgress}%`}}>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-semibold mb-8">
              <Award className="h-4 w-4 mr-2" />
              15+ Years Experience • Fortune 500 Trusted
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Your Local Experts,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block pb-2">
                Global IT Insight.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Intelligent Network Infrastructure. Solutions Experience Without Borders.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center text-lg font-semibold"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="group border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center text-lg font-semibold"
              >
                View Services
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600 font-medium">Networks Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Network Problems Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Is Your Home Network Driving You Crazy?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left mb-12">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div className="text-lg text-gray-700">Wi-Fi dead zones in your house?</div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div className="text-lg text-gray-700">Smart devices always offline?</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div className="text-lg text-gray-700">Issues with your computer or phone?</div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div className="text-lg text-gray-700">Worried about your family's online security?</div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">BitSynapse is Your Local Solution!</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We provide fast, reliable, and secure networks for you.
                <br />
                From seamless Wi-Fi to smart home setup, we handle it all.
              </p>
              
              <div className="text-lg font-semibold text-gray-900 mb-8">Our Services Include:</div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white rounded-lg p-6 text-center shadow-lg border border-gray-200">
                  <Wifi className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="font-semibold text-gray-900">Home Wi-Fi Upgrades</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-lg border border-gray-200">
                  <Home className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="font-semibold text-gray-900">Smart Home Installation</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-lg border border-gray-200">
                  <Network className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="font-semibold text-gray-900">Network Troubleshooting</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-lg border border-gray-200">
                  <Server className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="font-semibold text-gray-900">Personal Cloud Solutions</div>
                  <div className="text-sm text-gray-600 mt-2">(for photos, files & more!)</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-600 mb-8">
                We bring world-class expertise to your neighborhood.
              </p>
              <p className="text-2xl font-bold text-gray-900 mb-8">
                Contact us for a free consultation!
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-10 py-4 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg font-semibold"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-8">
              <Network className="h-4 w-4 mr-2" />
              Professional Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Fortune 500 enterprises to smart homes, we deliver reliable, 
              scalable network solutions that actually work.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Consulting",
                description: "Expert IT consulting to assess your needs and design optimal network solutions."
              },
              {
                icon: Network,
                title: "Integration Implementation",
                description: "Seamless integration and implementation of network infrastructure and systems."
              },
              {
                icon: Zap,
                title: "Support Maintenance",
                description: "Ongoing support and maintenance to keep your network running at peak performance."
              },
              {
                icon: Wifi,
                title: "Remote",
                description: "Remote monitoring and management services for continuous network oversight."
              },
              {
                icon: Building,
                title: "Operation Management",
                description: "Comprehensive operation management for enterprise network environments."
              },
              {
                icon: Award,
                title: "Optimization",
                description: "Performance optimization services to maximize your network efficiency and speed."
              },
              {
                icon: Server,
                title: "Cloud",
                description: "Cloud solutions including private cloud setup and hybrid cloud integration."
              },
              {
                icon: Shield,
                title: "Security Implementation",
                description: "Comprehensive security implementation and cybersecurity consulting services."
              }
            ].map((service, index) => (
              <div key={index} className="text-center group bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-8">
              <Award className="h-4 w-4 mr-2" />
              Our Credentials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Fortune 500 Companies Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15 years of proven expertise in enterprise networking and system integration, 
              now bringing that same level of professionalism to homes and small businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Award,
                title: "Enterprise Experience",
                description: "Deployed networks for Fortune 500 companies with 99.9% uptime reliability."
              },
              {
                icon: Users,
                title: "Complete Solutions",
                description: "End-to-end service from planning to implementation to ongoing support."
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock monitoring and support to keep your network running."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl text-center max-w-4xl mx-auto border border-gray-200">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-700 italic mb-6 leading-relaxed">
              "BitSynapse transformed our network infrastructure completely. Their enterprise-level 
              expertise and attention to detail is exactly what we needed for our growing business."
            </blockquote>
            <div className="text-gray-600 font-medium">
              Adam, CEO at a Growing Tech Company
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-8">
              <Building className="h-4 w-4 mr-2" />
              Our Methodology
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Three-Pillar Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BitSynapse's commitment to innovation through cutting-edge technology, 
              industry expertise, and collaborative development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Exploring Cutting-Edge Technologies</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Actively explore cutting-edge technologies and set up laboratories for full validation, 
                  so as to make technological reserves to meet the innovative technology requirements 
                  for customers' business.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Deeply Cultivating Industry Requirements</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Classify industries based on BitSynapse's huge high-quality customer group, 
                  refine the generality of industry requirements and create industry solutions.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Joint Development of Innovative Applications</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Meet customers' digital transformation requirements, jointly develop innovative 
                  applications for digital intelligence, tap data values, and realize customers' 
                  own business development and decision optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity and Innovation Section */}
      <section id="innovation" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-8">
              <Zap className="h-4 w-4 mr-2" />
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Connectivity and Innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Network className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation-Driven Culture</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Innovation is a core concept and value of BitSynapse's culture. Today, advanced technologies 
                      such as cloud computing, big data, Internet of Things, artificial intelligence and machine learning, 
                      etc, make our world constantly change at an unprecedented speed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Transformation Partnership</h3>
                    <p className="text-gray-600 leading-relaxed">
                      BitSynapse takes customer requirements as its foundation, deeply cultivates industry characteristics, 
                      and actively make innovations in solutions, applications and services, and now is striding forward 
                      from a system integrator and service provider to a digital transformation partner of customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-100 shadow-xl">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mb-6">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Excellence</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                    <Server className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Cloud Computing</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                    <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">AI & ML</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                    <Network className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">IoT Solutions</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                    <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Big Data</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Network?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a free consultation and see how our enterprise-grade solutions 
              can solve your networking challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4 text-blue-200" />
                    <div>
                      <div className="font-semibold">Email Consultation</div>
                      <div className="text-blue-200">contact@bitsynapse.ca</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4 text-blue-200" />
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-blue-200">
                        <a href="https://maps.app.goo.gl/TUs2huWA37bScU486" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                          362 University Ave 2nd Floor, Charlottetown, PE C1A 4M7, Canada
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Free Consultation</div>
                      <div className="text-gray-600">We assess your needs and provide recommendations</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Custom Proposal</div>
                      <div className="text-gray-600">Detailed solution with transparent pricing</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                      <span className="text-blue-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Professional Installation</div>
                      <div className="text-gray-600">Expert implementation with ongoing support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Consultation</h3>
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select name="serviceType" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white">
                    <option value="">Select service type...</option>
                    <option value="business-network">Business Network Setup</option>
                    <option value="home-network">Home Network Upgrade</option>
                    <option value="smart-home">Smart Home Integration</option>
                    <option value="private-cloud">Private Cloud Solution</option>
                    <option value="security-audit">Security Audit</option>
                    <option value="network-repair">Network Troubleshooting</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="projectDetails"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                    placeholder="Tell us about your networking needs, current challenges, or what you're trying to achieve..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Free Consultation
                </button>
                <p className="text-sm text-gray-600 text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <img src="/logo.svg" alt="BitSynapse" className="h-12 w-12 mr-4" />
                <div>
                  <div className="text-2xl font-bold">BitSynapse</div>
                  <div className="text-gray-400">IT Network Solutions Inc.</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Enterprise-grade network solutions for homes and businesses. 
                15 years of Fortune 500 experience, now serving clients across the Maritimes and Canada.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Certified Professionals</div>
                  <div className="text-gray-400 text-sm">Licensed & Insured</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                  <a href="mailto:contact@bitsynapse.ca" className="text-gray-300 hover:text-white transition-colors">
                    contact@bitsynapse.ca
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                  <a href="https://maps.app.goo.gl/TUs2huWA37bScU486" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    362 University Ave 2nd Floor<br />
                    Charlottetown, PE C1A 4M7, Canada
                  </a>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-400">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    24/7 Support Available
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} BitSynapse IT Network Solutions Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-full shadow-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ChevronDown className="h-5 w-5 rotate-180" />
        </button>
      )}
    </div>
  );
}

export default App;