import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@shared/schema";

export default function CaseStudiesSection() {
  const { data: caseStudies, isLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies"],
  });

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="case-studies-title">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leading companies have transformed their marketing performance with our data-driven solutions
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden border border-border">
                <div className="w-full h-48 bg-muted animate-pulse"></div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="h-4 bg-muted rounded animate-pulse"></div>
                    <div className="h-6 bg-muted rounded animate-pulse"></div>
                    <div className="h-16 bg-muted rounded animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies?.map((caseStudy) => (
              <Card 
                key={caseStudy.id}
                className="overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
                data-testid={`case-study-card-${caseStudy.id}`}
              >
                <img 
                  src={caseStudy.imageUrl} 
                  alt={caseStudy.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2 text-accent font-semibold">
                    {caseStudy.industry}
                  </Badge>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {caseStudy.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {caseStudy.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {caseStudy.metrics.map((metric, index) => (
                      <div key={index}>
                        <div className="text-2xl font-bold text-primary">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center"
                    data-testid={`button-read-case-study-${caseStudy.id}`}
                  >
                    Read Full Case Study <ArrowRight className="ml-1" size={16} />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Link href="/case-studies">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-view-all-case-studies"
            >
              View All Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
