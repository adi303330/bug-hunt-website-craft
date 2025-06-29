
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, Zap, Shield, Clock, Star, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleStartTesting = () => {
    toast({
      title: "Get Started with Testing!",
      description: "We'll connect you with expert testers shortly. Please check your email for next steps.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">TesterWork</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <Button variant="outline" className="mr-2">Sign In</Button>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            🚀 Trusted by 10,000+ companies worldwide
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Software
            <span className="text-blue-600"> Testing Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Connect with expert testers worldwide. Get comprehensive testing for your web and mobile applications with detailed reports and actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8" onClick={handleStartTesting}>
              Start Testing Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Join as Tester
            </Button>
          </div>
          <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              No Setup Required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              24/7 Support
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Money-back Guarantee
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Testing Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive testing solutions for every stage of your development process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Functional Testing</CardTitle>
                <CardDescription>
                  Verify that your application works as intended with comprehensive functional testing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />User Interface Testing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />API Testing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Database Testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Usability Testing</CardTitle>
                <CardDescription>
                  Get real user feedback and improve your application's user experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />User Journey Testing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Accessibility Testing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Cross-browser Testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Security Testing</CardTitle>
                <CardDescription>
                  Protect your application with thorough security vulnerability assessments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Vulnerability Scanning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Penetration Testing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Authentication Testing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How TesterWork Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your application tested in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Submit Your Project</h3>
              <p className="text-gray-600">
                Upload your application details, requirements, and testing scope. Our platform will match you with the right testers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Testing</h3>
              <p className="text-gray-600">
                Experienced testers will thoroughly test your application across multiple devices, browsers, and scenarios.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Detailed Reports</h3>
              <p className="text-gray-600">
                Receive comprehensive testing reports with screenshots, videos, and actionable recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-200">Tests Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your testing needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Basic</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">$99</div>
                <p className="text-gray-600">per project</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />5 Test Cases</div>
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />2 Devices</div>
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Basic Report</div>
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />48h Delivery</div>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-600 hover:shadow-lg transition-shadow duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">$299</div>
                <p className="text-gray-600">per project</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />20 Test Cases</div>
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />5 Devices</div>
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Detailed Report</div>
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />24h Delivery</div>
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Video Reports</div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">$999</div>
                <p className="text-gray-600">per project</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Unlimited Test Cases</div>
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />10+ Devices</div>
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Premium Report</div>
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />12h Delivery</div>
                <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Dedicated Manager</div>
                <Button className="w-full mt-6">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TesterWork</span>
              </div>
              <p className="text-gray-400">
                Professional software testing services trusted by companies worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Functional Testing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Usability Testing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security Testing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Testing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TesterWork. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
