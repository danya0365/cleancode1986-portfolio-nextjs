# Clean Code 1986 Portfolio - TODO List

## 📋 Project Overview

เว็บไซต์ Portfolio สำหรับบริษัท Clean Code 1986 เพื่อแสดงผลงานและบริการ ให้ลูกค้าได้ชมและตัดสินใจจ้างงาน

---

## 🎯 Phase 1: Foundation & Core Setup ✅ COMPLETED

### 1.1 Project Architecture ✅

- [x] Setup Next.js 15 with App Router
- [x] Setup TypeScript
- [x] Setup Tailwind CSS v4
- [x] Setup Zustand for state management
- [x] Setup localforage for persistence
- [x] Setup axios for HTTP client
- [x] Setup Supabase for backend
- [x] Create Clean Architecture folder structure
  - [x] `/src/domain` - Entities, Interfaces, Types
  - [x] `/src/application` - Use Cases, DTOs, Services
  - [x] `/src/infrastructure` - API clients, Repositories
  - [x] `/src/presentation` - Components, Presenters, Hooks

### 1.2 Database & Backend ✅

- [x] Initialize Supabase project
- [x] Create initial schema migration
- [x] Setup authentication (Supabase Auth)
- [x] Create environment variables

---

## 🎨 Phase 2: UI Development with Mock Data (CURRENT FOCUS)

**Strategy: Build UI first with Mock Data, then integrate real API later**

### 2.1 Design System & Components

- [ ] **Color Palette**
  - [ ] Primary colors (brand colors)
  - [ ] Secondary colors
  - [ ] Status colors
- [ ] **Typography**
  - [ ] Setup Kanit font from Google Fonts
  - [ ] Define heading sizes (h1-h6)
  - [ ] Define body text sizes
- [ ] **Component Library (Atomic Design)**
  - [ ] **Atoms**
    - [ ] Button (primary, secondary, ghost)
    - [ ] Input (text, email, textarea)
    - [ ] Badge
    - [ ] Icon
    - [ ] Avatar
  - [ ] **Molecules**
    - [ ] Card
    - [ ] Form Field (label + input + error)
    - [ ] Search Bar
    - [ ] Dropdown
  - [ ] **Organisms**
    - [ ] Navbar
    - [ ] Footer
    - [ ] Hero Section
    - [ ] Portfolio Grid
    - [ ] Contact Form
- [ ] **Implement Dark Mode** with next-themes
- [ ] **Responsive Design**
  - [ ] Mobile (< 768px)
  - [ ] Tablet (768px - 1024px)
  - [ ] Desktop (> 1024px)

### 2.2 Pages & Features

#### 🏠 **Landing Page** (Priority 1)

**Path:** `/`

- [ ] **Hero Section**
  - [ ] Company logo & tagline
  - [ ] Main headline
  - [ ] Call-to-action buttons (ดูผลงาน, ติดต่อเรา)
  - [ ] Background image/video
- [ ] **About Section**
  - [ ] Company overview
  - [ ] Mission & Vision
  - [ ] Core values
- [ ] **Services Section**
  - [ ] Service cards (Web Development, Mobile App, UI/UX Design, etc.)
  - [ ] Service icons
  - [ ] Brief descriptions
  - [ ] "Learn More" links
- [ ] **Featured Portfolio Section**
  - [ ] 3-6 featured projects
  - [ ] Project thumbnails
  - [ ] Project titles & categories
  - [ ] "View All Projects" button
- [ ] **Stats Section**
  - [ ] Projects completed
  - [ ] Happy clients
  - [ ] Years of experience
  - [ ] Team members
  - [ ] Animated counters
- [ ] **Testimonials Section**
  - [ ] Client testimonials
  - [ ] Client avatars & names
  - [ ] Carousel/slider
- [ ] **Technology Stack Section**
  - [ ] Tech logos (React, Next.js, TypeScript, etc.)
  - [ ] Tech categories
- [ ] **CTA Section**
  - [ ] Contact form preview or button
  - [ ] Social media links
- [ ] **Footer**
  - [ ] Company info
  - [ ] Quick links
  - [ ] Contact info
  - [ ] Social media
  - [ ] Copyright

#### 📁 **Portfolio/Projects Pages** (Priority 2)

**Paths:** `/portfolio`, `/portfolio/[slug]`

**Portfolio List Page (`/portfolio`)**

- [ ] **Filter & Search**
  - [ ] Search by project name
  - [ ] Filter by category (Web, Mobile, UI/UX, etc.)
  - [ ] Filter by technology
  - [ ] Sort by (Latest, Popular, A-Z)
- [ ] **Project Grid**
  - [ ] Project cards with thumbnail
  - [ ] Project title & category
  - [ ] Technologies used (badges)
  - [ ] Hover effects
  - [ ] Click to view details
- [ ] **Pagination** or Infinite Scroll
- [ ] **Empty State** (no projects found)

**Project Detail Page (`/portfolio/[slug]`)**

- [ ] **Project Header**
  - [ ] Project title
  - [ ] Category & tags
  - [ ] Client name (optional)
  - [ ] Project date
  - [ ] Live link & GitHub link
- [ ] **Hero Image/Video**
  - [ ] Main project screenshot/mockup
  - [ ] Image gallery slider
- [ ] **Project Overview**
  - [ ] Problem statement
  - [ ] Solution
  - [ ] Results/impact
- [ ] **Technologies Used**
  - [ ] Tech stack list with icons
  - [ ] Brief explanation of each tech
- [ ] **Project Features**
  - [ ] Feature list with descriptions
  - [ ] Screenshots for each feature
- [ ] **Gallery/Screenshots**
  - [ ] Multiple project images
  - [ ] Lightbox view
- [ ] **Related Projects**
  - [ ] 3-4 similar projects
  - [ ] Project cards
- [ ] **CTA Section**
  - [ ] "Start Your Project" button
  - [ ] "View All Projects" button

#### 🛠️ **Services Page** (Priority 3)

**Path:** `/services`

- [ ] **Hero Section**
  - [ ] Page title
  - [ ] Description
- [ ] **Services Grid**
  - [ ] Service cards
  - [ ] Service icons
  - [ ] Service titles
  - [ ] Descriptions
  - [ ] "Learn More" or expandable details
- [ ] **Service Categories**
  - [ ] Web Development
    - [ ] Frontend (React, Next.js, Vue.js)
    - [ ] Backend (Node.js, NestJS)
    - [ ] Full-stack
  - [ ] Mobile Development
    - [ ] React Native
    - [ ] iOS (Swift)
    - [ ] Android (Kotlin)
  - [ ] UI/UX Design
    - [ ] User research
    - [ ] Wireframing
    - [ ] Prototyping
    - [ ] Design systems
  - [ ] Consulting
    - [ ] Technical consulting
    - [ ] Code review
    - [ ] Architecture design
- [ ] **Process/Workflow Section**
  - [ ] Step-by-step process
  - [ ] Timeline visualization
- [ ] **CTA Section**
  - [ ] "Get Started" button

#### 👥 **About/Team Page** (Priority 4)

**Path:** `/about`

- [ ] **Company Story Section**
  - [ ] Company history
  - [ ] Mission & vision
  - [ ] Values
- [ ] **Team Section**
  - [ ] Team member cards
  - [ ] Photos & names
  - [ ] Roles/positions
  - [ ] Brief bios
  - [ ] Social links (LinkedIn, GitHub)
- [ ] **Why Choose Us Section**
  - [ ] Key differentiators
  - [ ] Statistics
  - [ ] Awards/certifications
- [ ] **Career/Join Us Section** (Optional)
  - [ ] Open positions
  - [ ] "We're hiring" message

#### 📞 **Contact Page** (Priority 5)

**Path:** `/contact`

- [ ] **Contact Form**
  - [ ] Name field
  - [ ] Email field
  - [ ] Phone field (optional)
  - [ ] Project type (dropdown)
  - [ ] Budget range (dropdown/slider)
  - [ ] Message/Details (textarea)
  - [ ] Submit button
  - [ ] Form validation (react-hook-form + zod)
  - [ ] Success/error messages
- [ ] **Contact Information**
  - [ ] Email address
  - [ ] Phone number
  - [ ] Office address
  - [ ] Social media links
- [ ] **Map** (Optional)
  - [ ] Google Maps embed or similar
- [ ] **FAQ Section** (Optional)
  - [ ] Common questions
  - [ ] Expandable answers

#### 📝 **Blog Pages** (Priority 6 - Optional)

**Paths:** `/blog`, `/blog/[slug]`

**Blog List Page (`/blog`)**

- [ ] **Blog Grid**
  - [ ] Blog post cards
  - [ ] Featured image
  - [ ] Title & excerpt
  - [ ] Author & date
  - [ ] Category tags
- [ ] **Filter by Category**
- [ ] **Search**
- [ ] **Pagination**

**Blog Detail Page (`/blog/[slug]`)**

- [ ] **Post Header**
  - [ ] Title
  - [ ] Author info
  - [ ] Publish date
  - [ ] Reading time
  - [ ] Category tags
- [ ] **Featured Image**
- [ ] **Post Content**
  - [ ] Rich text formatting
  - [ ] Code syntax highlighting
  - [ ] Images
- [ ] **Share Buttons**
  - [ ] Facebook, Twitter, LinkedIn
- [ ] **Related Posts**

#### 🔐 **Admin/Dashboard Pages** (Priority 7 - Later)

**Protected Routes**

- [ ] `/admin` - Dashboard overview
- [ ] `/admin/projects` - Manage projects (CRUD)
- [ ] `/admin/blog` - Manage blog posts (CRUD)
- [ ] `/admin/contacts` - View contact submissions
- [ ] `/admin/settings` - Site settings

### 2.3 Mock Data Structure

Create `/src/data/mock/` folder

- [ ] **projects.mock.ts**

  ```typescript
  - id, slug, title, category, description
  - thumbnail, images[]
  - technologies[], features[]
  - client, projectDate, liveUrl, githubUrl
  - isFeatured, status
  ```

- [ ] **services.mock.ts**

  ```typescript
  - id, title, icon, description
  - category, features[], pricing
  ```

- [ ] **team.mock.ts**

  ```typescript
  -id, name, role, bio, avatar - socialLinks(linkedin, github, twitter);
  ```

- [ ] **testimonials.mock.ts**

  ```typescript
  -id, clientName, clientRole, company - avatar, content, rating, projectId;
  ```

- [ ] **blog.mock.ts** (Optional)

  ```typescript
  -id,
    slug,
    title,
    excerpt,
    content - author,
    publishDate,
    category,
    tags - featuredImage,
    readTime;
  ```

- [ ] **technologies.mock.ts**
  ```typescript
  -id, name, icon, category - description, proficiencyLevel;
  ```

### 2.4 Global Layout Components

- [ ] **Navbar Component**
  - [ ] Logo
  - [ ] Navigation links (Home, Portfolio, Services, About, Contact, Blog)
  - [ ] Mobile menu (hamburger)
  - [ ] Dark mode toggle
  - [ ] Sticky on scroll
  - [ ] Active link highlighting
- [ ] **Footer Component**
  - [ ] Company info
  - [ ] Quick links
  - [ ] Contact info
  - [ ] Social media icons
  - [ ] Newsletter signup (optional)
  - [ ] Copyright
- [ ] **Layout Wrapper**
  - [ ] Consistent page structure
  - [ ] Navbar + content + footer

---

## 🗄️ Phase 3: Database Schema & Backend Integration

### 3.1 Database Tables Design

#### **Projects Table** (`portfolio_projects`)

```sql
- id (uuid)
- slug (text, unique)
- title (text)
- description (text)
- content (text) -- Rich text/HTML
- category (text) -- Web, Mobile, UI/UX
- technologies (text[]) -- Array of tech names
- features (jsonb) -- [{title, description, image}]
- thumbnail_url (text)
- images (text[]) -- Array of image URLs
- client_name (text, nullable)
- project_date (date)
- live_url (text, nullable)
- github_url (text, nullable)
- is_featured (boolean)
- view_count (integer)
- status (text) -- draft, published, archived
- created_at, updated_at
- created_by (uuid, references auth.users)
```

#### **Services Table** (`services`)

```sql
- id (uuid)
- title (text)
- description (text)
- icon (text) -- Icon name or URL
- category (text)
- features (jsonb) -- [{name, description}]
- pricing_info (text, nullable)
- sort_order (integer)
- is_active (boolean)
- created_at, updated_at
```

#### **Team Members Table** (`team_members`)

```sql
- id (uuid)
- name (text)
- role (text)
- bio (text)
- avatar_url (text)
- linkedin_url (text, nullable)
- github_url (text, nullable)
- twitter_url (text, nullable)
- sort_order (integer)
- is_active (boolean)
- created_at, updated_at
```

#### **Testimonials Table** (`testimonials`)

```sql
- id (uuid)
- client_name (text)
- client_role (text)
- company (text)
- avatar_url (text, nullable)
- content (text)
- rating (integer) -- 1-5
- project_id (uuid, nullable, references portfolio_projects)
- is_featured (boolean)
- created_at, updated_at
```

#### **Contact Submissions Table** (`contact_submissions`)

```sql
- id (uuid)
- name (text)
- email (text)
- phone (text, nullable)
- project_type (text)
- budget_range (text, nullable)
- message (text)
- status (text) -- new, read, replied, archived
- created_at, updated_at
```

#### **Blog Posts Table** (`blog_posts`) - Optional

```sql
- id (uuid)
- slug (text, unique)
- title (text)
- excerpt (text)
- content (text) -- Rich text/HTML
- author_id (uuid, references auth.users)
- category (text)
- tags (text[])
- featured_image_url (text)
- read_time (integer) -- minutes
- view_count (integer)
- status (text) -- draft, published
- published_at (timestamp)
- created_at, updated_at
```

#### **Technologies Table** (`technologies`)

```sql
- id (uuid)
- name (text)
- icon_url (text)
- category (text) -- Frontend, Backend, Mobile, etc.
- description (text)
- proficiency_level (integer) -- 1-5
- sort_order (integer)
- is_active (boolean)
- created_at, updated_at
```

### 3.2 Row Level Security (RLS) Policies

- [ ] **Public Read Access**
  - [ ] Projects (published only)
  - [ ] Services
  - [ ] Team members
  - [ ] Testimonials
  - [ ] Blog posts (published only)
  - [ ] Technologies
- [ ] **Admin Write Access**
  - [ ] Admin users can CRUD all tables
  - [ ] Regular users cannot modify data
- [ ] **Contact Submissions**
  - [ ] Anyone can create (public form)
  - [ ] Only admins can view/update

### 3.3 API Endpoints / Server Actions

Create in `/src/application/usecases/` and `/src/infrastructure/repositories/`

- [ ] **Projects**
  - [ ] `getAllProjects()` - Get all published projects
  - [ ] `getProjectBySlug(slug)` - Get single project
  - [ ] `getFeaturedProjects()` - Get featured projects
  - [ ] `getProjectsByCategory(category)` - Filter by category
- [ ] **Contact**
  - [ ] `submitContactForm(data)` - Create contact submission
  - [ ] `sendContactEmail(data)` - Send email notification
- [ ] **Admin (Protected)**
  - [ ] `createProject(data)` - Create new project
  - [ ] `updateProject(id, data)` - Update project
  - [ ] `deleteProject(id)` - Delete project
  - [ ] `getContactSubmissions()` - Get all submissions

---

## 🚀 Phase 4: Advanced Features

### 4.1 SEO Optimization

- [ ] **Next.js Metadata**
  - [ ] generateMetadata() for all pages
  - [ ] Dynamic OG images
  - [ ] Twitter cards
- [ ] **Sitemap**
  - [ ] Generate sitemap.xml
  - [ ] Submit to Google Search Console
- [ ] **robots.txt**
- [ ] **Structured Data (JSON-LD)**
  - [ ] Organization schema
  - [ ] Article schema for blog
  - [ ] Product schema for services

### 4.2 Performance Optimization

- [ ] **Image Optimization**
  - [ ] Next.js Image component
  - [ ] WebP format
  - [ ] Lazy loading
- [ ] **Code Splitting**
  - [ ] Dynamic imports
  - [ ] Route-based splitting
- [ ] **Caching Strategy**
  - [ ] Static generation where possible
  - [ ] ISR for projects/blog
  - [ ] CDN caching

### 4.3 Analytics & Tracking

- [ ] **Google Analytics**
  - [ ] Setup GA4
  - [ ] Track page views
  - [ ] Track events (contact form, project views)
- [ ] **Contact Form Analytics**
  - [ ] Track submission rate
  - [ ] Track conversion sources

### 4.4 Email Integration

- [ ] **Email Service Setup**
  - [ ] Choose provider (SendGrid, Resend, Mailgun)
  - [ ] Setup email templates
- [ ] **Email Notifications**
  - [ ] Contact form submission → Admin notification
  - [ ] Contact form submission → Client confirmation
  - [ ] Newsletter signup (optional)

---

## 🎨 Phase 5: UI Polish & Enhancements

### 5.1 Animations & Interactions

- [ ] **Scroll Animations**
  - [ ] Fade in on scroll
  - [ ] Slide in from sides
  - [ ] Parallax effects
- [ ] **Page Transitions**
  - [ ] Smooth page transitions
  - [ ] Loading states
- [ ] **Micro-interactions**
  - [ ] Button hover effects
  - [ ] Card hover effects
  - [ ] Form input focus states

### 5.2 Accessibility (A11y)

- [ ] **Keyboard Navigation**
  - [ ] Tab order
  - [ ] Focus indicators
- [ ] **Screen Reader Support**
  - [ ] ARIA labels
  - [ ] Alt text for images
  - [ ] Semantic HTML
- [ ] **Color Contrast**
  - [ ] WCAG AA compliance
  - [ ] Test with contrast checker

### 5.3 Internationalization (Optional)

- [ ] **Multi-language Support**
  - [ ] Thai
  - [ ] English
  - [ ] Language switcher

---

## 🧪 Phase 6: Testing & Quality Assurance

### 6.1 Testing

- [ ] **Unit Tests** (Jest)
  - [ ] Component tests
  - [ ] Utility functions
- [ ] **Integration Tests**
  - [ ] API endpoints
  - [ ] Forms
- [ ] **E2E Tests** (Playwright or Cypress)
  - [ ] Critical user flows
  - [ ] Contact form submission
  - [ ] Navigation

### 6.2 Cross-browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Android)

### 6.3 Performance Testing

- [ ] **Lighthouse Audit**
  - [ ] Performance score > 90
  - [ ] Accessibility score > 90
  - [ ] SEO score > 90
- [ ] **Core Web Vitals**
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1

---

## 🚀 Phase 7: Deployment & DevOps

### 7.1 Deployment Setup

- [ ] **Vercel Deployment**
  - [ ] Connect GitHub repo
  - [ ] Configure environment variables
  - [ ] Setup custom domain
  - [ ] Configure SSL
- [ ] **Supabase Production**
  - [ ] Create production project
  - [ ] Run migrations
  - [ ] Configure RLS policies
  - [ ] Setup backups

### 7.2 CI/CD Pipeline

- [ ] **GitHub Actions**
  - [ ] Run tests on PR
  - [ ] Type checking
  - [ ] Linting
  - [ ] Build verification
- [ ] **Automated Deployments**
  - [ ] Deploy on merge to main
  - [ ] Preview deployments for PRs

### 7.3 Monitoring & Logging

- [ ] **Error Tracking**
  - [ ] Sentry or similar
  - [ ] Error boundaries
- [ ] **Uptime Monitoring**
  - [ ] UptimeRobot or similar
- [ ] **Performance Monitoring**
  - [ ] Vercel Analytics
  - [ ] Real User Monitoring (RUM)

---

## 📋 Phase 8: Content & Launch

### 8.1 Content Creation

- [ ] **Write Copy**
  - [ ] About page content
  - [ ] Services descriptions
  - [ ] Project case studies
- [ ] **Gather Assets**
  - [ ] Company logo (multiple sizes)
  - [ ] Team photos
  - [ ] Project screenshots/mockups
  - [ ] Client testimonials
- [ ] **Create Project Portfolio**
  - [ ] At least 6-10 projects
  - [ ] High-quality images
  - [ ] Detailed descriptions

### 8.2 Pre-launch Checklist

- [ ] **Content Review**
  - [ ] Proofread all text
  - [ ] Check for typos
  - [ ] Verify links
- [ ] **Technical Review**
  - [ ] Test all forms
  - [ ] Test on multiple devices
  - [ ] Verify analytics setup
- [ ] **SEO Setup**
  - [ ] Submit sitemap to Google
  - [ ] Setup Google Search Console
  - [ ] Setup Google My Business
- [ ] **Legal**
  - [ ] Privacy Policy
  - [ ] Terms of Service
  - [ ] Cookie Policy (if applicable)

### 8.3 Launch

- [ ] **Soft Launch**
  - [ ] Share with team
  - [ ] Gather feedback
  - [ ] Fix critical issues
- [ ] **Official Launch**
  - [ ] Announce on social media
  - [ ] Email existing clients
  - [ ] Update business cards/materials
- [ ] **Post-launch**
  - [ ] Monitor analytics
  - [ ] Track contact form submissions
  - [ ] Gather user feedback

---

## 🔄 Phase 9: Maintenance & Growth

### 9.1 Regular Maintenance

- [ ] **Content Updates**
  - [ ] Add new projects regularly
  - [ ] Update team info
  - [ ] Refresh testimonials
- [ ] **Technical Maintenance**
  - [ ] Update dependencies
  - [ ] Security patches
  - [ ] Performance optimization
- [ ] **SEO Maintenance**
  - [ ] Monitor rankings
  - [ ] Update meta tags
  - [ ] Add new content for SEO

### 9.2 Feature Enhancements

- [ ] **Blog Platform** (if not done)
  - [ ] Share industry insights
  - [ ] Technical tutorials
  - [ ] Case studies
- [ ] **Client Portal** (Future)
  - [ ] Project tracking
  - [ ] Invoice management
  - [ ] File sharing
- [ ] **Booking System** (Future)
  - [ ] Schedule consultations
  - [ ] Calendar integration

---

## 📊 Priority Summary

### **NOW - Phase 2 (UI Development)**

Focus on building all UI pages with mock data following the CREATE_PAGE_PATTERN.md

**High Priority Pages:**

1. Landing Page (/)
2. Portfolio List (/portfolio)
3. Project Detail (/portfolio/[slug])
4. Contact Page (/contact)
5. Services Page (/services)
6. About Page (/about)

**Timeline:** 2-3 weeks

### **NEXT - Phase 3 (Backend Integration)**

Connect UI to Supabase and replace mock data

**Timeline:** 1-2 weeks

### **LATER - Phases 4-9 (Polish, Launch, Growth)**

SEO, performance, deployment, content, and ongoing maintenance

**Timeline:** Ongoing

---

## 🎯 Current Sprint Goals

**Sprint 1: Landing + Portfolio Pages (Week 1-2)**

- [ ] Landing page UI complete
- [ ] Portfolio list page UI complete
- [ ] Project detail page UI complete
- [ ] Mock data for 6-10 projects
- [ ] Responsive design for all pages

**Sprint 2: Contact + Services + About (Week 3)**

- [ ] Contact page with form
- [ ] Services page UI
- [ ] About/Team page UI
- [ ] Footer & Navbar finalized
- [ ] Mock data complete

**Sprint 3: Backend Integration (Week 4-5)**

- [ ] Database schema created
- [ ] Supabase integration
- [ ] Replace all mock data
- [ ] Admin CRUD operations

**Sprint 4: Polish & Launch (Week 6+)**

- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Content creation
- [ ] Testing & deployment

---

## 📝 Notes

- **Follow CREATE_PAGE_PATTERN.md** for all page creation
- **Use Clean Architecture** throughout the project
- **Mobile-first design** approach
- **Optimize for Core Web Vitals** from the start
- **Dark mode support** for better UX
- **Accessibility first** - WCAG AA compliance minimum

---

**Last Updated:** 2025-10-06
**Current Phase:** Phase 2 - UI Development with Mock Data
**Status:** 🚧 In Progress
