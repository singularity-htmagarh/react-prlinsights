import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Target, TrendingUp, CheckCircle } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "marketing-analytics",
      icon: BarChart3,
      title: "Marketing Analytics",
      description: "Advanced statistical modeling and data analysis to uncover hidden patterns in your marketing performance. Custom attribution models, customer journey mapping, and predictive analytics.",
      features: [
        "Multi-touch attribution modeling",
        "Customer lifetime value analysis",
        "Predictive churn modeling",
        "Marketing mix modeling (MMM)"
      ],
      buttonColor: "bg-primary hover:bg-primary/90",
      iconColor: "text-primary",
      iconBg: "bg-primary/10"
    },
    {
      id: "media-optimization",
      icon: Target,
      title: "Media Optimization",
      description: "Systematic approach to optimize your media spend across channels. Real-time bidding strategies, budget allocation optimization, and cross-channel performance measurement.",
      features: [
        "Automated bid optimization",
        "Cross-channel budget allocation",
        "Creative performance analysis",
        "Incrementality testing"
      ],
      buttonColor: "bg-accent hover:bg-accent/90",
      iconColor: "text-accent",
      iconBg: "bg-accent/10"
    },
    {
      id: "causal-inference",
      icon: TrendingUp,
      title: "Causal Inference Modeling",
      description: "Rigorous statistical methods to establish true causal relationships in your marketing data. Experiment design, difference-in-differences analysis, and synthetic control methods.",
      features: [
        "Randomized controlled trials",
        "Quasi-experimental design",
        "Instrumental variables",
        "Propensity score matching"
      ],
      buttonColor: "bg-secondary hover:bg-secondary/90",
      iconColor: "text-secondary",
      iconBg: "bg-secondary/10"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="services-title">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive consulting solutions that transform your marketing data into actionable insights
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="bg-card shadow-lg p-8 border border-border hover:shadow-xl transition-shadow duration-300"
                data-testid={`service-card-${service.id}`}
              >
                <CardContent className="p-0">
                  <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className={service.iconColor} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className={`${service.iconColor} mr-2`} size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services">
                    <Button 
                      className={`w-full ${service.buttonColor} text-white`}
                      data-testid={`button-learn-more-${service.id}`}
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
