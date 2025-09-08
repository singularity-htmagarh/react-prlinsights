import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { GraduationCap, Rocket, Shield } from "lucide-react";

const formSchema = insertInquirySchema.extend({
  services: insertInquirySchema.shape.services.default([])
});

type FormData = InsertInquiry;

export default function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      services: [],
      budget: "",
      details: ""
    }
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: FormData) => {
      return await apiRequest("POST", "/api/inquiries", data);
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted Successfully",
        description: "We'll get back to you within 2 business hours.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
      reset();
      setSelectedServices([]);
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    submitInquiry.mutate({ ...data, services: selectedServices });
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    const newServices = checked 
      ? [...selectedServices, service]
      : selectedServices.filter(s => s !== service);
    
    setSelectedServices(newServices);
    setValue("services", newServices);
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="contact-title">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your marketing with advanced analytics? Let's discuss your specific needs and design a custom solution.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Schedule a Consultation</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    {...register("firstName")}
                    data-testid="input-first-name"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    {...register("lastName")}
                    data-testid="input-last-name"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your business email"
                  {...register("email")}
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  {...register("company")}
                  data-testid="input-company"
                />
                {errors.company && (
                  <p className="text-sm text-destructive mt-1">{errors.company.message}</p>
                )}
              </div>
              
              <div>
                <Label>Services Interested In</Label>
                <div className="grid md:grid-cols-3 gap-4 mt-2">
                  {[
                    { id: "marketing-analytics", label: "Marketing Analytics" },
                    { id: "media-optimization", label: "Media Optimization" },
                    { id: "causal-inference", label: "Causal Inference" }
                  ].map((service) => (
                    <div key={service.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={service.id}
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                        data-testid={`checkbox-${service.id}`}
                      />
                      <Label htmlFor={service.id} className="text-sm text-muted-foreground">
                        {service.label}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.services && (
                  <p className="text-sm text-destructive mt-1">{errors.services.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="budget">Monthly Marketing Budget</Label>
                <Select onValueChange={(value) => setValue("budget", value)} data-testid="select-budget">
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-100k">Under $100K</SelectItem>
                    <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                    <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                    <SelectItem value="over-5m">Over $5M</SelectItem>
                  </SelectContent>
                </Select>
                {errors.budget && (
                  <p className="text-sm text-destructive mt-1">{errors.budget.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="details">Project Details</Label>
                <Textarea
                  id="details"
                  rows={4}
                  placeholder="Tell us about your current challenges and goals..."
                  {...register("details")}
                  data-testid="textarea-details"
                />
                {errors.details && (
                  <p className="text-sm text-destructive mt-1">{errors.details.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting || submitInquiry.isPending}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-submit-inquiry"
              >
                {isSubmitting || submitInquiry.isPending ? "Submitting..." : "Schedule Consultation"}
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Why Choose PRL Insights & Partners?</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Global Talent Pool Expertise</h4>
                  <p className="text-muted-foreground">Our team includes data scientists with advanced degrees from top and global universities and years of industry experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Rocket className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Proven Results</h4>
                  <p className="text-muted-foreground">Average 250% ROI improvement across 500+ successful implementations for enterprise clients.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Enterprise Security</h4>
                  <p className="text-muted-foreground">SOC 2 Type II compliance, end-to-end encryption, and custom SLA agreements for peace of mind.</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-card border border-border" data-testid="contact-info">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <svg className="mr-3 text-primary" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>hello@prlinsights.com</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <svg className="mr-3 text-primary" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>(+1) 647-425-7751</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <svg className="mr-3 text-primary" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Toronto, Canada</span>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-sm text-muted-foreground mb-3">Response Time</div>
                  <div className="text-foreground font-semibold">Within 2 business hours</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
