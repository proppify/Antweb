import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Bot, 
  Zap, 
  Workflow, 
  Database, 
  Settings, 
  Play, 
  CheckCircle, 
  Star,
  Users,
  MessageSquare,
  BarChart3,
  Globe,
  Smartphone,
  GraduationCap,
  ShoppingCart,
  Headphones,
  Building,
  Moon,
  Sun,
  ArrowRight,
  Sparkles,
  Target,
  Brain,
  Layers,
  Monitor,
  LineChart,
  Puzzle,
  Shield,
  Rocket,
  Code,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    
    // Auto-cycle through steps for demo effect
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [darkMode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const MouseResponsiveParticles = () => (
    <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(60)].map((_, i) => {
        const distanceFromMouse = Math.sqrt(
          Math.pow(mousePosition.x - (window.innerWidth * (i % 10) / 10), 2) +
          Math.pow(mousePosition.y - (window.innerHeight * Math.floor(i / 10) / 6), 2)
        );
        const scale = Math.max(0.3, 1 - distanceFromMouse / 400);
        
        return (
          <div
            key={i}
            className="absolute rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${(i % 10) * 10}%`,
              top: `${Math.floor(i / 10) * 16.67}%`,
              backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.3)',
              transform: `scale(${scale})`,
              opacity: scale * 0.8
            }}
          />
        );
      })}
    </div>
  );

  const features = [
    {
      icon: Bot,
      title: "Agent Templates",
      description: "Pre-built templates for common use cases"
    },
    {
      icon: Workflow,
      title: "Visual Flow Designer", 
      description: "Drag-and-drop conversation flows"
    },
    {
      icon: Database,
      title: "Modular Sources",
      description: "Connect multiple data sources easily"
    },
    {
      icon: Settings,
      title: "Full Customization",
      description: "Tailor every aspect to your needs"
    }
  ];

  const steps = [
    {
      title: "Choose a Template",
      description: "Start with pre-built templates for your industry",
      icon: Target,
      active: currentStep === 0
    },
    {
      title: "Train with Your Data",
      description: "Upload documents, connect APIs, train on your content",
      icon: Brain,
      active: currentStep === 1
    },
    {
      title: "Design the Conversation",
      description: "Customize flows, responses, and personality",
      icon: MessageSquare,
      active: currentStep === 2
    },
    {
      title: "Preview & Deploy",
      description: "Test your agent and deploy instantly",
      icon: Rocket,
      active: currentStep === 3
    }
  ];

  const coreFeatures = [
    { icon: Bot, title: "Templates", description: "Ready-to-use agent templates" },
    { icon: Workflow, title: "Visual Flow", description: "Drag & drop conversation design" },
    { icon: Database, title: "Multi-source KB", description: "Connect any data source" },
    { icon: Zap, title: "Streaming", description: "Real-time responses" },
    { icon: Brain, title: "Memory", description: "Context-aware conversations" },
    { icon: Code, title: "Embeddable Widget", description: "Drop-in chat widget" },
    { icon: BarChart3, title: "Analytics", description: "Detailed usage insights" },
    { icon: Monitor, title: "Playground", description: "Test and iterate quickly" },
    { icon: Shield, title: "Security", description: "Enterprise-grade security" }
  ];

  const useCases = [
    {
      id: "support",
      title: "Customer Support",
      description: "Automate customer inquiries with intelligent responses",
      icon: Headphones,
      demo: "Try Demo"
    },
    {
      id: "leads",
      title: "Lead Qualification",
      description: "Pre-qualify leads before they reach your sales team",
      icon: Target,
      demo: "Try Demo"
    },
    {
      id: "automation",
      title: "Internal Automation",
      description: "Streamline internal processes and workflows",
      icon: Settings,
      demo: "Try Demo"
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      description: "Product recommendations and order assistance",
      icon: ShoppingCart,
      demo: "Try Demo"
    },
    {
      id: "education",
      title: "Education",
      description: "Interactive learning and student support",
      icon: GraduationCap,
      demo: "Try Demo"
    }
  ];

  return (
    <div className={cn("min-h-screen bg-background text-foreground transition-all duration-300", darkMode && "dark")}>
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 group">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2F895a5ba8dbbd4e8bb87f76bb6fa9ba05%2Ff7743ce6b6894af3bf9c103a69bce7c0?format=webp&width=800" 
              alt="ANT Logo" 
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl font-bold">Ant</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm hover:text-primary transition-colors duration-300">Features</a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors duration-300">How It Works</a>
            <a href="/pricing" className="text-sm hover:text-primary transition-colors duration-300">Pricing</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors duration-300">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full transition-all duration-300 hover:scale-105"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="outline" size="sm" className="transition-all duration-300 hover:scale-105">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <MouseResponsiveParticles />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <Badge variant="secondary" className="mb-8 text-sm px-6 py-3 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-4 h-4 mr-2" />
              Build Smart AI Agents
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8">
              Ant: Build Smart AI Agents That Work Like Teams
            </h1>
            
            <p className="text-xl md:text-3xl mb-12 text-muted-foreground max-w-3xl mx-auto">
              No code. No limits. Just results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="text-lg px-10 py-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Create an Agent
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-8 rounded-full transition-all duration-300 hover:scale-105 border-2">
                <Play className="mr-2 h-6 w-6" />
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Ant Different */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Makes Ant Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for teams that need more than just chatbots
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border bg-background/80 backdrop-blur-sm cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center space-x-6">
                    <div className="p-4 rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                      <feature.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-lg">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              From idea to deployment in minutes
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connection lines */}
              <div className="hidden md:block absolute top-8 left-1/8 right-1/8 h-px bg-border z-0"></div>
              
              {steps.map((step, index) => (
                <div key={index} className="text-center group relative z-10">
                  <div className="relative mb-8">
                    <div className={cn(
                      "w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                      step.active 
                        ? "bg-primary shadow-lg" 
                        : "bg-muted group-hover:bg-primary/80"
                    )}>
                      <step.icon className={cn(
                        "h-10 w-10 transition-colors duration-300",
                        step.active ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary-foreground"
                      )} />
                    </div>
                    <Badge className={cn(
                      "absolute -bottom-3 left-1/2 transform -translate-x-1/2 transition-all duration-300",
                      step.active ? "bg-primary" : ""
                    )}>
                      {index + 1}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to build powerful AI agents
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coreFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border bg-background/80 backdrop-blur-sm"
                onClick={() => {
                  // Navigate to features section or individual feature page
                  const featuresSection = document.getElementById('features');
                  featuresSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2 transition-colors duration-300 group-hover:text-primary">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Use Cases
            </h2>
            <p className="text-xl text-muted-foreground">
              Powerful solutions for every industry
            </p>
          </div>
          
          <Tabs defaultValue="support" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 bg-muted/50 p-2 rounded-2xl">
              {useCases.map((useCase) => (
                <TabsTrigger 
                  key={useCase.id} 
                  value={useCase.id} 
                  className="text-xs md:text-sm transition-all duration-300 hover:scale-105 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl"
                >
                  <useCase.icon className="h-4 w-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">{useCase.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id}>
                <Card className="border bg-background/80 backdrop-blur-sm shadow-lg">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <useCase.icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-3xl mb-4">{useCase.title}</CardTitle>
                    <CardDescription className="text-xl">{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button size="lg" className="transition-all duration-300 hover:scale-105">
                      {useCase.demo}
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Ant */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why "Ant"?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Just like ants work together to build complex structures, our AI agents collaborate seamlessly to deliver intelligent, scalable solutions.
              </p>
              <ul className="space-y-6">
                {[
                  "Modular Intelligence",
                  "Seamless Collaboration", 
                  "Infinite Scalability",
                  "Collective Intelligence"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-border transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <Users className="h-20 w-20 text-primary mx-auto mb-6" />
                  <p className="text-2xl font-semibold">
                    AI Agents Working Together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Build Your AI Agent Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Join hundreds of businesses already using Ant to transform their operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="text-xl px-12 py-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Visit theant.space
                <ExternalLink className="ml-3 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-12 py-8 rounded-full transition-all duration-300 hover:scale-105 border-2">
                Try Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
            
            <p className="text-muted-foreground">
              No credit card required • Setup in minutes • 24/7 support
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F895a5ba8dbbd4e8bb87f76bb6fa9ba05%2Ff7743ce6b6894af3bf9c103a69bce7c0?format=webp&width=800" 
                  alt="ANT Logo" 
                  className="h-10 w-10 object-contain"
                />
                <span className="text-2xl font-bold">Ant</span>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Build Smart AI Agents That Work Like Teams
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="transition-all duration-300 hover:scale-110">
                  <Globe className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="transition-all duration-300 hover:scale-110">
                  <MessageSquare className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="transition-all duration-300 hover:scale-110">
                  <BarChart3 className="h-6 w-6" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-lg">Features</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors duration-300">Agent Templates</a></li>
                <li><a href="#features" className="hover:text-foreground transition-colors duration-300">Visual Flow Designer</a></li>
                <li><a href="#features" className="hover:text-foreground transition-colors duration-300">Multi-source KB</a></li>
                <li><a href="#features" className="hover:text-foreground transition-colors duration-300">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-lg">Company</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Partner with Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-lg">Contact</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Support</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Privacy</a></li>
                <li className="text-primary">support@theant.space</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Ant. All rights reserved. Building the future of AI collaboration.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
