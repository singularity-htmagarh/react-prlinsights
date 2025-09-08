import { type User, type InsertUser, type Inquiry, type InsertInquiry, type CaseStudy, type InsertCaseStudy, type Testimonial, type InsertTestimonial } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  getCaseStudies(): Promise<CaseStudy[]>;
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private inquiries: Map<string, Inquiry>;
  private caseStudies: Map<string, CaseStudy>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.caseStudies = new Map();
    this.testimonials = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample case studies
    const sampleCaseStudies: CaseStudy[] = [
      {
        id: "case-1",
        title: "250% ROI Improvement",
        industry: "E-COMMERCE",
        description: "Global fashion retailer optimized their attribution model and media mix, resulting in 40% better conversion rates and 60% more efficient ad spend.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        metrics: [
          { label: "Conversion Rate", value: "+40%" },
          { label: "Ad Efficiency", value: "+60%" }
        ],
        tags: ["Attribution Modeling", "Media Optimization"]
      },
      {
        id: "case-2",
        title: "Reduced Churn by 35%",
        industry: "SAAS",
        description: "B2B SaaS platform implemented predictive churn modeling and personalized retention campaigns, dramatically improving customer lifetime value.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        metrics: [
          { label: "Customer Churn", value: "-35%" },
          { label: "LTV Increase", value: "+125%" }
        ],
        tags: ["Predictive Analytics", "Customer Retention"]
      },
      {
        id: "case-3",
        title: "3x Marketing Efficiency",
        industry: "FINTECH",
        description: "Leading fintech company used causal inference modeling to optimize cross-channel campaigns and improve customer acquisition costs.",
        imageUrl: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        metrics: [
          { label: "Acquisition Cost", value: "-65%" },
          { label: "Campaign ROI", value: "+180%" }
        ],
        tags: ["Causal Inference", "Cross-channel Optimization"]
      }
    ];

    // Sample testimonials
    const sampleTestimonials: Testimonial[] = [
      {
        id: "testimonial-1",
        name: "Sarah Kim",
        title: "VP Marketing",
        company: "TechCorp",
        content: "DataInsights Pro completely transformed our marketing attribution. We finally understand which channels drive real value and can allocate budget with confidence. ROI improved by 200% in 6 months.",
        rating: "5",
        service: "Marketing Analytics Implementation"
      },
      {
        id: "testimonial-2",
        name: "Michael Rodriguez",
        title: "Chief Data Officer",
        company: "RetailPlus",
        content: "The causal inference modeling helped us understand the true impact of our campaigns. No more guesswork - we have scientific rigor in our marketing decisions. Incredible expertise.",
        rating: "5",
        service: "Causal Inference Modeling"
      },
      {
        id: "testimonial-3",
        name: "Jessica Chen",
        title: "Head of Growth",
        company: "StartupX",
        content: "Their media optimization strategies cut our acquisition costs by 40% while doubling conversion rates. The team's technical depth and business acumen are unmatched.",
        rating: "5",
        service: "Media Optimization Strategy"
      }
    ];

    sampleCaseStudies.forEach(cs => this.caseStudies.set(cs.id, cs));
    sampleTestimonials.forEach(t => this.testimonials.set(t.id, t));
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = randomUUID();
    const inquiry: Inquiry = { 
      ...insertInquiry, 
      id, 
      createdAt: new Date() 
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getCaseStudies(): Promise<CaseStudy[]> {
    return Array.from(this.caseStudies.values());
  }

  async createCaseStudy(insertCaseStudy: InsertCaseStudy): Promise<CaseStudy> {
    const id = randomUUID();
    const caseStudy: CaseStudy = { ...insertCaseStudy, id };
    this.caseStudies.set(id, caseStudy);
    return caseStudy;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
