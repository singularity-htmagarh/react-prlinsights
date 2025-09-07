import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="hero-title">
              Transform Your Marketing with{" "}
              <span className="text-primary">Advanced Analytics</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="hero-description">
              Expert consulting in marketing analytics, media optimization, and causal inference modeling. 
              Help your technical teams unlock data-driven insights that drive measurable business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="button-schedule-consultation"
                >
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button 
                  size="lg"
                  variant="outline"
                  data-testid="button-view-case-studies"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8" data-testid="hero-stats">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary" data-testid="stat-campaigns">500+</div>
                <div className="text-sm text-muted-foreground">Campaigns Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary" data-testid="stat-roi">250%</div>
                <div className="text-sm text-muted-foreground">Avg. ROI Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary" data-testid="stat-clients">50+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="bg-card shadow-lg border border-border" data-testid="hero-dashboard">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-card-foreground">Marketing Performance Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="w-3 h-3 bg-muted rounded-full"></div>
                    <div className="w-3 h-3 bg-muted rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Conversion Rate</span>
                    <span className="font-semibold text-primary">+24.5%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Media Efficiency</span>
                    <span className="font-semibold text-primary">+18.2%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: "68%" }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Attribution Accuracy</span>
                    <span className="font-semibold text-primary">+31.7%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
