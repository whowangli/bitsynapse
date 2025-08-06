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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    const mailtoLink = `mailto:hello@bitsynapse.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/98 backdrop-blur-lg shadow-xl border-b border-gray-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/logo.svg" alt="BitSynapse" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">BitSynapse</span>
                <span className="text-xs text-gray-600 -mt-1">IT Network Solutions Inc.</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium">
                  Services
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium">
                  About
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-left font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-8">
              <Award className="h-4 w-4 mr-2" />
              15+ Years Experience • Fortune 500 Trusted
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Enterprise-Grade
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
                Network Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Professional network infrastructure, smart home integration, and IT consulting 
              that Fortune 500 companies trust. Now available for your home and business.
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

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-6">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Building,
                category: "Business Solutions",
                title: "Enterprise Network Infrastructure",
                description: "Complete network design, implementation, and maintenance for businesses of all sizes. From small offices to Fortune 500 companies.",
                features: ["Network Design & Planning", "Security Implementation", "24/7 Monitoring", "Scalable Solutions"],
                color: "blue"
              },
              {
                icon: Home,
                category: "Residential Services",
                title: "Smart Home & Network Optimization",
                description: "Transform your home with professional-grade networking, smart home integration, and private cloud solutions.",
                features: ["Whole-Home Wi-Fi", "Smart Device Integration", "Private Cloud Setup", "Home Security Systems"],
                color: "indigo"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:from-blue-50 hover:to-indigo-50 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-gray-200">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color === 'blue' ? 'from-blue-500 to-blue-600' : 'from-indigo-500 to-indigo-600'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className={`inline-block px-3 py-1 ${service.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-indigo-100 text-indigo-700'} rounded-full text-sm font-semibold mb-4`}>
                  {service.category}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Server,
                title: "Private Cloud Solutions",
                description: "Secure, personal cloud servers for data storage and remote access."
              },
              {
                icon: Shield,
                title: "Cybersecurity Consulting",
                description: "Comprehensive security audits and implementation for businesses."
              },
              {
                icon: Wifi,
                title: "Network Troubleshooting",
                description: "Expert diagnosis and resolution of network connectivity issues."
              }
            ].map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                  <service.icon className="h-10 w-10 text-gray-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
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
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl text-center max-w-4xl mx-auto">
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
                    <Phone className="h-6 w-6 mr-4 text-blue-200" />
                    <div>
                      <div className="font-semibold">Call for Immediate Help</div>
                      <div className="text-blue-200">+1 (368) 380-3344</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4 text-blue-200" />
                    <div>
                      <div className="font-semibold">Email Consultation</div>
                      <div className="text-blue-200">hello@bitsynapse.ca</div>
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
              
              <div className="bg-gray-50 rounded-2xl p-8">
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

            <div className="bg-gray-50 rounded-2xl p-8">
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
                      placeholder="+1 (368) 380-3344"
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
                  <a href="mailto:hello@bitsynapse.ca" className="text-gray-300 hover:text-white transition-colors">
                    hello@bitsynapse.ca
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                  <a href="tel:+13683803344" className="text-gray-300 hover:text-white transition-colors">
                    +1 (368) 380-3344
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
    </div>
  );
}

export default App;