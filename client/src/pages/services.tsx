import Navigation from "@/components/navigation";
import ServicesSection from "@/components/services-section";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Target, BarChart3 } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Expert Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive consulting solutions that transform your marketing data into actionable insights
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {/* Marketing Analytics */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <BarChart3 className="text-primary" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Marketing Analytics</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Advanced statistical modeling and data analysis to uncover hidden patterns in your marketing performance. 
                  Our team builds custom attribution models, maps customer journeys, and creates predictive analytics solutions.
                </p>
                <div className="space-y-4">
                  {[
                    "Multi-touch attribution modeling",
                    "Customer lifetime value analysis", 
                    "Predictive churn modeling",
                    "Marketing mix modeling (MMM)",
                    "Customer journey mapping",
                    "Cohort analysis and segmentation"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-primary mr-3" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle>Implementation Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">Data Audit & Assessment</h4>
                      <p className="text-sm text-muted-foreground">Evaluate current analytics setup and data quality</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Model Development</h4>
                      <p className="text-sm text-muted-foreground">Build custom attribution and predictive models</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold">Implementation & Training</h4>
                      <p className="text-sm text-muted-foreground">Deploy solutions and train your team</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Media Optimization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="bg-card border border-border lg:order-2">
                <CardHeader>
                  <CardTitle>Optimization Framework</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Real-time Bidding</h4>
                      <p className="text-sm text-muted-foreground">Automated bid optimization across platforms</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">Budget Allocation</h4>
                      <p className="text-sm text-muted-foreground">AI-driven cross-channel budget distribution</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold">Performance Monitoring</h4>
                      <p className="text-sm text-muted-foreground">Continuous optimization and reporting</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="text-accent" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Media Optimization</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Systematic approach to optimize your media spend across channels. We implement real-time bidding strategies, 
                  budget allocation optimization, and cross-channel performance measurement to maximize your advertising ROI.
                </p>
                <div className="space-y-4">
                  {[
                    "Automated bid optimization",
                    "Cross-channel budget allocation",
                    "Creative performance analysis",
                    "Incrementality testing",
                    "Audience optimization",
                    "Campaign automation"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-accent mr-3" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Causal Inference */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="text-secondary" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Causal Inference Modeling</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Rigorous statistical methods to establish true causal relationships in your marketing data. 
                  We design experiments, implement difference-in-differences analysis, and use synthetic control methods 
                  to understand what really drives your business results.
                </p>
                <div className="space-y-4">
                  {[
                    "Randomized controlled trials",
                    "Quasi-experimental design",
                    "Instrumental variables",
                    "Propensity score matching",
                    "Synthetic control methods",
                    "Difference-in-differences analysis"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-secondary mr-3" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle>Experimental Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold">Hypothesis Formation</h4>
                      <p className="text-sm text-muted-foreground">Identify key business questions and formulate testable hypotheses</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">Experiment Design</h4>
                      <p className="text-sm text-muted-foreground">Design rigorous experiments with proper controls</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Statistical Analysis</h4>
                      <p className="text-sm text-muted-foreground">Apply advanced statistical methods to prove causality</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
