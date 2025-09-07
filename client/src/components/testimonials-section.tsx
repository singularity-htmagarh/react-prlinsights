import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading companies worldwide for advanced marketing analytics and optimization
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border border-border">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="h-4 bg-muted rounded animate-pulse"></div>
                    <div className="h-16 bg-muted rounded animate-pulse"></div>
                    <div className="h-4 bg-muted rounded animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) => (
              <Card 
                key={testimonial.id}
                className="bg-card border border-border"
                data-testid={`testimonial-${testimonial.id}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-accent fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Quote className="text-primary mr-2" size={16} />
                    {testimonial.service}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
