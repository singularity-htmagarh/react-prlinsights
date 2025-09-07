import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function IntegrationSection() {
  return (
    <section id="integration" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="integration-title">
            Seamless Data Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect your existing data infrastructure with our advanced analytics platform. 
            RESTful APIs, real-time data streaming, and enterprise-grade security.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">API Integration</h3>
            
            <div className="space-y-6">
              <Card className="bg-card border border-border" data-testid="api-authentication">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-card-foreground">Authentication</h4>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">POST</Badge>
                  </div>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code className="text-muted-foreground">
{`curl -X POST https://api.datainsights.pro/v1/auth \\
  -H "Content-Type: application/json" \\
  -d '{
    "client_id": "your_client_id",
    "client_secret": "your_client_secret"
  }'`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
              
              <Card className="bg-card border border-border" data-testid="api-data-upload">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-card-foreground">Data Upload</h4>
                    <Badge variant="secondary" className="bg-accent/10 text-accent">POST</Badge>
                  </div>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code className="text-muted-foreground">
{`curl -X POST https://api.datainsights.pro/v1/data \\
  -H "Authorization: Bearer {token}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "dataset": "marketing_campaigns",
    "data": [...]
  }'`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
              
              <Card className="bg-card border border-border" data-testid="api-analytics">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-card-foreground">Get Analytics</h4>
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary">GET</Badge>
                  </div>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code className="text-muted-foreground">
{`curl -X GET https://api.datainsights.pro/v1/analytics/attribution \\
  -H "Authorization: Bearer {token}" \\
  -G -d "campaign_id=12345" \\
  -d "date_range=30d"`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Data Sources</h3>
            
            <div className="space-y-4 mb-8">
              <Card className="bg-card border border-border" data-testid="integration-google">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">Google Marketing Platform</h4>
                      <p className="text-sm text-muted-foreground">Google Ads, Analytics, DV360</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Integration Status</span>
                    <Badge className="bg-primary/10 text-primary">Active</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border border-border" data-testid="integration-meta">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">Meta Business</h4>
                      <p className="text-sm text-muted-foreground">Facebook, Instagram Ads</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Integration Status</span>
                    <Badge className="bg-primary/10 text-primary">Active</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border border-border" data-testid="integration-custom">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <ellipse cx="12" cy="5" rx="9" ry="3"/>
                        <path d="M3 5v14a9 3 0 0 0 18 0V5"/>
                        <path d="M3 12a9 3 0 0 0 18 0"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">Custom Data Sources</h4>
                      <p className="text-sm text-muted-foreground">SQL, CSV, Real-time streams</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Integration Status</span>
                    <Badge className="bg-primary/10 text-primary">Available</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-card border border-border" data-testid="enterprise-features">
              <CardContent className="p-6">
                <h4 className="font-semibold text-card-foreground mb-4">Enterprise Features</h4>
                <ul className="space-y-2">
                  {[
                    "SOC 2 Type II Compliance",
                    "End-to-end encryption",
                    "Real-time data processing",
                    "Custom SLA agreements"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="text-primary mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 mr-4"
            data-testid="button-get-api-docs"
          >
            Get API Documentation
          </Button>
          <Button 
            variant="outline"
            data-testid="button-schedule-demo"
          >
            Schedule Technical Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
