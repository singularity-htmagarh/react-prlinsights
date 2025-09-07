import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function PricingSection() {
  const packages = [
    {
      id: "analytics-audit",
      name: "Analytics Audit",
      price: "$25,000",
      period: "One-time assessment",
      features: [
        "Comprehensive analytics audit",
        "Attribution model evaluation",
        "Optimization recommendations",
        "Implementation roadmap",
        "30-day email support"
      ],
      buttonText: "Start Assessment",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      id: "full-implementation",
      name: "Full Implementation",
      price: "$75,000",
      period: "3-month engagement",
      features: [
        "Everything in Analytics Audit",
        "Custom attribution modeling",
        "Media optimization setup",
        "Data integration & APIs",
        "Team training & documentation",
        "Ongoing optimization support"
      ],
      buttonText: "Get Started",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      id: "enterprise-partnership",
      name: "Enterprise Partnership",
      price: "Custom",
      period: "Ongoing relationship",
      features: [
        "Everything in Full Implementation",
        "Advanced causal inference",
        "Real-time optimization",
        "Dedicated analytics team",
        "Custom SLA & guarantees",
        "24/7 technical support"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="pricing-title">
            Investment Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible consulting packages designed to scale with your business needs and deliver measurable ROI
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id}
              className={`p-8 relative ${pkg.popular ? 'border-2 border-primary' : 'border border-border'}`}
              data-testid={`pricing-package-${pkg.id}`}
            >
              {pkg.popular && (
                <Badge 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground"
                  data-testid="badge-most-popular"
                >
                  Most Popular
                </Badge>
              )}
              
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {pkg.period}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-primary mr-3 mt-0.5" size={16} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact">
                  <Button 
                    variant={pkg.buttonVariant}
                    className={`w-full ${pkg.buttonVariant === 'default' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`}
                    data-testid={`button-${pkg.id}`}
                  >
                    {pkg.buttonText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All packages include detailed ROI tracking and performance guarantees
          </p>
          <button 
            className="text-primary hover:text-primary/80 font-semibold"
            data-testid="button-compare-features"
          >
            Compare All Features <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
