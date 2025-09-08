// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  users;
  inquiries;
  caseStudies;
  testimonials;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.inquiries = /* @__PURE__ */ new Map();
    this.caseStudies = /* @__PURE__ */ new Map();
    this.testimonials = /* @__PURE__ */ new Map();
    this.initializeSampleData();
  }
  initializeSampleData() {
    const sampleCaseStudies = [
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
    const sampleTestimonials = [
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
    sampleCaseStudies.forEach((cs) => this.caseStudies.set(cs.id, cs));
    sampleTestimonials.forEach((t) => this.testimonials.set(t.id, t));
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async createInquiry(insertInquiry) {
    const id = randomUUID();
    const inquiry = {
      ...insertInquiry,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }
  async getInquiries() {
    return Array.from(this.inquiries.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
  async getCaseStudies() {
    return Array.from(this.caseStudies.values());
  }
  async createCaseStudy(insertCaseStudy) {
    const id = randomUUID();
    const caseStudy = { ...insertCaseStudy, id };
    this.caseStudies.set(id, caseStudy);
    return caseStudy;
  }
  async getTestimonials() {
    return Array.from(this.testimonials.values());
  }
  async createTestimonial(insertTestimonial) {
    const id = randomUUID();
    const testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var inquiries = pgTable("inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  services: json("services").$type().notNull(),
  budget: text("budget").notNull(),
  details: text("details").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var caseStudies = pgTable("case_studies", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  industry: text("industry").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  metrics: json("metrics").$type().notNull(),
  tags: json("tags").$type().notNull()
});
var testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  content: text("content").notNull(),
  rating: text("rating").notNull(),
  service: text("service").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  createdAt: true
});
var insertCaseStudySchema = createInsertSchema(caseStudies).omit({
  id: true
});
var insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true
});

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.json({ success: true, inquiry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to submit inquiry"
        });
      }
    }
  });
  app2.get("/api/case-studies", async (req, res) => {
    try {
      const caseStudies2 = await storage.getCaseStudies();
      res.json(caseStudies2);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch case studies"
      });
    }
  });
  app2.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials2 = await storage.getTestimonials();
      res.json(testimonials2);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch testimonials"
      });
    }
  });
  app2.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries2 = await storage.getInquiries();
      res.json(inquiries2);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch inquiries"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "127.0.0.1"
  }, () => {
    log(`serving on port ${port}`);
  });
})();
