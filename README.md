# Marketing Analytics Consulting Platform

## Overview

This is a full-stack web application for a marketing analytics consulting company called "DataInsights Pro". The platform serves as a business website showcasing services in marketing analytics, media optimization, and causal inference modeling. It features a modern React frontend with a REST API backend, designed to capture leads through contact forms and display case studies and testimonials to potential clients.

The application follows a consulting services business model, targeting technical teams at data-driven enterprises who need advanced marketing analytics solutions. The platform emphasizes scientific rigor, statistical modeling, and proven methodologies in marketing optimization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js REST API
- **Language**: TypeScript with ES modules
- **Data Layer**: Drizzle ORM with PostgreSQL schema definitions
- **Validation**: Zod schemas shared between client and server
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Hot module replacement via Vite middleware integration

### Data Storage Solutions
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with type-safe queries and migrations
- **Current Implementation**: Memory-based storage with sample data for development
- **Schema**: Shared TypeScript schema definitions in `/shared/schema.ts`
- **Tables**: Users, inquiries (contact forms), case studies, and testimonials

### API Design Patterns
- **Architecture**: RESTful API with JSON payloads
- **Endpoints**: 
  - `POST /api/inquiries` - Contact form submissions
  - `GET /api/case-studies` - Fetch case studies
  - `GET /api/testimonials` - Fetch testimonials
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Validation**: Server-side validation using Zod schemas
- **Logging**: Request/response logging for API endpoints

### Development Workflow
- **Monorepo Structure**: Client, server, and shared code in single repository
- **Development Server**: Concurrent client/server development with HMR
- **Build Process**: Vite for frontend, esbuild for backend bundling
- **Type Safety**: Shared TypeScript interfaces between frontend and backend

## External Dependencies

### Database and ORM
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle Kit**: Database migrations and schema management
- **Connect PG Simple**: PostgreSQL session store for Express sessions

### UI and Styling
- **Radix UI**: Comprehensive primitive component library
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants

### Form and Data Management
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation for forms and API payloads
- **TanStack Query**: Server state management, caching, and synchronization
- **Date-fns**: Date manipulation and formatting utilities

### Development Tools
- **Vite**: Build tool with fast HMR and optimized production builds
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript/TypeScript bundler for production
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Specialized Libraries
- **Embla Carousel**: Touch-friendly carousel component
- **Wouter**: Lightweight client-side routing
- **CMDK**: Command palette component for enhanced UX