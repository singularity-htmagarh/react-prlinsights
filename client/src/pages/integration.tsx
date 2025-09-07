import Navigation from "@/components/navigation";
import IntegrationSection from "@/components/integration-section";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Shield, Zap } from "lucide-react";

export default function Integration() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Technical <span className="text-primary">Integration</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamlessly connect your existing data infrastructure with our advanced analytics platform
            </p>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="text-primary" size={24} />
                </div>
                <CardTitle>RESTful APIs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modern REST API endpoints with comprehensive documentation and SDKs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-accent" size={24} />
                </div>
                <CardTitle>Real-time Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stream processing capabilities for real-time analytics and optimization
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="text-secondary" size={24} />
                </div>
                <CardTitle>Data Connectors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pre-built connectors for major advertising platforms and analytics tools
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-primary" size={24} />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SOC 2 Type II compliance with end-to-end encryption and custom SLAs
                </p>
              </CardContent>
            </Card>
          </div>

          <IntegrationSection />
        </div>
      </section>

      <Footer />
    </div>
  );
}
