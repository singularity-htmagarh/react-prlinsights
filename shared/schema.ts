import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const inquiries = pgTable("inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  services: json("services").$type<string[]>().notNull(),
  budget: text("budget").notNull(),
  details: text("details").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const caseStudies = pgTable("case_studies", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  industry: text("industry").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  metrics: json("metrics").$type<{ label: string; value: string }[]>().notNull(),
  tags: json("tags").$type<string[]>().notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  content: text("content").notNull(),
  rating: text("rating").notNull(),
  service: text("service").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  createdAt: true,
});

export const insertCaseStudySchema = createInsertSchema(caseStudies).omit({
  id: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;
export type CaseStudy = typeof caseStudies.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
