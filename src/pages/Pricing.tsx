import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Check,
  ArrowRight,
  Moon,
  Sun,
  Globe,
  MessageSquare,
  BarChart3
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function Pricing() {
  const [darkMode, setDarkMode] = useState(false);

  const plans = [
    {
      name: "Hobby",
      price: "$40",
      period: "per month",
      features: [
        "2,000 message credits/month",
        "1 AI agent",
        "5 AI Actions per AI agent",
        "33 MB per AI agent",
        "Unlimited links to train on",
        "API access",
        "Basic analytics"
      ],
      buttonText: "Upgrade",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Standard",
      price: "$150",
      period: "per month",
      features: [
        "12,000 message credits/month",
        "10 AI Actions per AI agent",
        "3 seats",
        "2 AI agents"
      ],
      buttonText: "Upgrade",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Pro",
      price: "$500",
      period: "per month",
      features: [
        "40,000 message credits/month",
        "15 AI Actions per AI agent",
        "5 seats",
        "3 AI agents",
        "Advanced analytics"
      ],
      buttonText: "Upgrade",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  const enterpriseFeatures = [
    "SSO",
    "SLAs",
    "Priority support",
    "Higher limits",
    "Customer success manager"
  ];

  const addOns = [
    {
      name: "Auto recharge credits",
      price: "$1e per 1,000 message credits",
      description: "Auto add credits when low"
    },
    {
      name: "Extra agents",
      price: "$7 per AI agent / month",
      description: ""
    },
    {
      name: "Custom domains",
      price: "$35 / month",
      description: "Use your own domain"
    },
    {
      name: "Extra message credits",
      price: "$1e per 1,000 credits / month",
      description: ""
    },
    {
      name: "Remove 'Powered by Chattese'",
      price: "$39 / month",
      description: ""
    }
  ];

  return (
    <div className={cn("min-h-screen bg-background text-foreground transition-all duration-300", darkMode && "dark")}>
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2F895a5ba8dbbd4e8bb87f76bb6fa9ba05%2Ff7743ce6b6894af3bf9c103a69bce7c0?format=webp&width=800" 
              alt="ANT Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold">Ant</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm hover:text-primary transition-colors duration-300">Home</a>
            <a href="/#features" className="text-sm hover:text-primary transition-colors duration-300">Features</a>
            <a href="/#how-it-works" className="text-sm hover:text-primary transition-colors duration-300">How It Works</a>
            <a href="/pricing" className="text-sm text-primary font-medium">Pricing</a>
            <a href="/#contact" className="text-sm hover:text-primary transition-colors duration-300">Contact</a>
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

      {/* Pricing Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Plans</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your AI agent needs
            </p>
          </div>

          {/* Main Plans */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={cn(
                  "relative transition-all duration-300 hover:scale-105",
                  plan.popular ? "border-2 border-primary shadow-lg" : "border hover:shadow-lg"
                )}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full mb-6" 
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enterprise Plan */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="border-2 border-dashed border-border">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                <CardDescription className="text-lg">Let's talk</CardDescription>
              </CardHeader>
              
              <CardContent className="text-center">
                <Button className="mb-6" size="lg">
                  Contact us
                </Button>
                
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {enterpriseFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Add-ons */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Add-ons</h2>
            
            <div className="space-y-4">
              {addOns.map((addon, index) => (
                <Card key={index} className="border">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{addon.name}</h3>
                      <p className="text-2xl font-bold mt-1">{addon.price}</p>
                      {addon.description && (
                        <p className="text-sm text-muted-foreground mt-1">{addon.description}</p>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Switch />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of businesses using Ant to automate with AI
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F895a5ba8dbbd4e8bb87f76bb6fa9ba05%2Ff7743ce6b6894af3bf9c103a69bce7c0?format=webp&width=800" 
                  alt="ANT Logo" 
                  className="h-10 w-10 object-contain"
                />
                <span className="text-2xl font-bold">Ant</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Build Smart AI Agents That Work Like Teams
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <BarChart3 className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#features" className="hover:text-foreground transition-colors">Agent Templates</a></li>
                <li><a href="/#features" className="hover:text-foreground transition-colors">Visual Flow Designer</a></li>
                <li><a href="/#features" className="hover:text-foreground transition-colors">Multi-source KB</a></li>
                <li><a href="/#features" className="hover:text-foreground transition-colors">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Partner with Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li>support@theant.space</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Ant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
