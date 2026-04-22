# CONTEXT — CleanCode1986 Portfolio (Next.js)

> **อ่านไฟล์นี้ไฟล์เดียวก็เข้าใจโปรเจคทั้งหมดได้ทันที**

---

## 1. Project Overview

| Key           | Value                                                     |
| ------------- | --------------------------------------------------------- |
| **Name**      | `cleancode1986-portfolio`                                 |
| **Framework** | Next.js 15.5.7 (App Router)                               |
| **React**     | 19.1.2                                                    |
| **Language**  | TypeScript 5                                              |
| **CSS**       | Tailwind CSS v4 + custom CSS variables (`public/styles/`) |
| **State**     | Zustand 5 + persist middleware                            |
| **Auth**      | NextAuth v5 beta-30 (JWT strategy, Credentials provider)  |
| **Database**  | Turso (libSQL) via `@libsql/client`                       |
| **AI**        | OpenAI / Google AI (Gemini) — fallback keyword-based      |
| **Messaging** | LINE Bot SDK (`@line/bot-sdk`)                            |
| **Animation** | Framer Motion 12                                          |
| **Forms**     | react-hook-form 7 + zod 4                                 |
| **Icons**     | lucide-react                                              |
| **Fonts**     | Noto Sans Thai + JetBrains Mono (Google Fonts)            |

### Environment Variables (`.env.example`)

```
NEXT_PUBLIC_APP_URL        # Base URL (default: http://localhost:3000)
NEXT_PUBLIC_APP_NAME       # App display name
DB_PROVIDER                # "turso"
TURSO_DATABASE_URL         # Turso connection URL
TURSO_AUTH_TOKEN           # Turso auth token
LINE_CHANNEL_ACCESS_TOKEN  # LINE Messaging API
LINE_ADMIN_USER_ID         # Admin's LINE user ID
LINE_CHANNEL_SECRET        # LINE webhook signature verification
AUTH_SECRET                # NextAuth secret
OPENAI_API_KEY             # (optional) OpenAI for chat AI
GOOGLE_AI_API_KEY          # (optional) Google AI for chat AI
```

---

## 2. Architecture — Clean Architecture

```
src/
├── application/           ← Domain interfaces (repository contracts)
│   └── repositories/
│       ├── IAuthRepository.ts
│       ├── IChatRepository.ts
│       ├── IHomeStatsRepository.ts
│       ├── IProjectRepository.ts
│       ├── IServiceRepository.ts
│       ├── ITeamMemberRepository.ts
│       ├── ITechnologyRepository.ts
│       ├── ITestimonialRepository.ts
│       └── types.ts              # PaginatedResult, QueryParams, SortOrder
│
├── data/                  ← Static/mock data sources
│   ├── master/            # Production master data (site.ts, hero.ts, stats.ts, projects/)
│   ├── mock/              # Mock data for dev (projects, services, team, tech, testimonials)
│   ├── static/            # Static data files (cv, projects, services, team, tech, testimonials)
│   └── knowledge.ts       # AI chatbot knowledge base & simple response matching
│
├── infrastructure/        ← Concrete implementations
│   ├── database/          # Turso connection (turso.ts), migrate.ts, seed.ts, reset.ts
│   ├── repositories/
│   │   ├── static/        # StaticXxxRepository (reads from data/static/)
│   │   └── turso/         # TursoChatRepository, TursoAuthRepository
│   └── services/
│       └── LineMessagingService.ts
│
└── presentation/          ← UI layer
    ├── components/        # View components (per feature)
    ├── hooks/             # Custom hooks (useAppVersion)
    ├── presenters/        # Presenter classes + factories
    ├── providers/         # XRayProvider (debug overlay, Ctrl+Shift+X)
    ├── store/             # useTemplateStore (Zustand)
    ├── stores/            # chat-store (Zustand)
    └── utils/
```

### Data Flow Pattern (per page)

```
Page (Server Component)
  → createServerXxxPresenter()        // factory creates Presenter + injects Repository
    → presenter.getViewModel()        // fetches data from Repository
    → presenter.generateMetadata()    // returns Next.js Metadata object
  → <MainLayout>
      → <XxxView initialViewModel={viewModel} />   // client component renders UI
```

---

## 3. App Router Map

### 3.1 Route Groups & Layouts

| Path      | File                      | Type                     | Description                                                                                                       |
| --------- | ------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `/`       | `app/layout.tsx`          | **Root Layout** (Server) | `<html>` + fonts (Noto Sans Thai, JetBrains Mono) + ThemeProvider (next-themes) + XRayProvider + TemplateSwitcher |
| `/(main)` | `app/(main)/layout.tsx`   | **Main Layout** (Server) | Wraps children + `<AIChatBubble />` (customer chatbot)                                                            |
| `/(main)` | `app/(main)/template.tsx` | **Template** (Client)    | Page transition animation: framer-motion fade+blur on route change                                                |

### 3.2 Pages — `(main)` group

| Route               | File                                   | Component           | Presenter Factory                    | Dynamic?                                             |
| ------------------- | -------------------------------------- | ------------------- | ------------------------------------ | ---------------------------------------------------- |
| `/`                 | `app/(main)/page.tsx`                  | `HomeView`          | `createServerHomePresenter`          | No                                                   |
| `/about`            | `app/(main)/about/page.tsx`            | `AboutView`         | `createServerAboutPresenter`         | `force-dynamic`                                      |
| `/about/cv/[id]`    | `app/(main)/about/cv/[id]/page.tsx`    | `CVPage`            | `createServerCVPresenter`            | Dynamic param `id` (team member ID), `force-dynamic` |
| `/contact`          | `app/(main)/contact/page.tsx`          | `ContactView`       | `createServerContactPresenter`       | No                                                   |
| `/portfolio`        | `app/(main)/portfolio/page.tsx`        | `PortfolioView`     | `createServerPortfolioPresenter`     | No                                                   |
| `/portfolio/[slug]` | `app/(main)/portfolio/[slug]/page.tsx` | `ProjectDetailView` | `createServerProjectDetailPresenter` | Dynamic param `slug`, has `generateStaticParams`     |
| `/services`         | `app/(main)/services/page.tsx`         | `ServicesView`      | `createServerServicesPresenter`      | No                                                   |
| `/promo`            | `app/(main)/promo/page.tsx`            | `PromoView`         | `createServerPromoPresenter`         | No (Social sharing promo page)                       |
| `/privacy`          | `app/(main)/privacy/page.tsx`          | `PrivacyPage`       | static metadata via `SITE`           | No                                                   |
| `/terms`            | `app/(main)/terms/page.tsx`            | `TermsPage`         | static metadata via `SITE`           | No                                                   |

**Common Pattern (all main pages except privacy/terms):**

- `async function generateMetadata()` — calls `presenter.generateMetadata()` with fallback
- `async function Page()` — calls `presenter.getViewModel()`, wraps in `<MainLayout>` → `<XxxView initialViewModel={viewModel} />`
- Error fallback renders `<XxxView />` without initialViewModel (component handles empty state)

### 3.3 Admin Pages (no route group, no layout)

| Route          | File                       | Type                         | Description                                                                                                                                                                                                                  |
| -------------- | -------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/admin/login` | `app/admin/login/page.tsx` | Client Component             | Magic Link login via `next-auth/react` `signIn("credentials", { token })`. Shows loading spinner during auth, error state if token expired, placeholder for future username/password form                                    |
| `/admin/chat`  | `app/admin/chat/page.tsx`  | Client Component (590 lines) | Full admin chat console: session list sidebar with tabs (Active/Follow-up/New/All), message view with search, admin reply, status management, auto-reply toggle, resolve chat. Polling: sessions every 5s, messages every 3s |

### 3.4 API Routes

#### Auth

| Method   | Route                     | File                                  | Description                                          |
| -------- | ------------------------- | ------------------------------------- | ---------------------------------------------------- |
| GET/POST | `/api/auth/[...nextauth]` | `app/api/auth/[...nextauth]/route.ts` | NextAuth catch-all handler (exported from `auth.ts`) |

#### Customer Chat API

| Method | Route                        | File                                     | Description                                                                                                                                                                                          |
| ------ | ---------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | `/api/chat/init`             | `app/api/chat/init/route.ts`             | Register customer (name + phone) → create or restore session, return history                                                                                                                         |
| POST   | `/api/chat`                  | `app/api/chat/route.ts`                  | Send customer message → save to DB, notify admin via LINE, generate AI response (OpenAI/GoogleAI/fallback). If `autoReply=true`: respond to customer. If `autoReply=false`: save as draft suggestion |
| GET    | `/api/chat/sync`             | `app/api/chat/sync/route.ts`             | Poll for new messages. Params: `sessionId`, `lastMessageAt` (delta poll), `before` (history scroll). Auto-marks non-user messages as "delivered"                                                     |
| POST   | `/api/chat/[sessionId]/read` | `app/api/chat/[sessionId]/read/route.ts` | Mark all non-user messages in session as "read"                                                                                                                                                      |

#### Admin Chat API (protected by middleware)

| Method | Route                                     | File                                       | Description                                                                                                                                       |
| ------ | ----------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | --------- | -------- | ----- |
| GET    | `/api/admin/chats`                        | `app/api/admin/chats/route.ts`             | List all sessions with latest message (`force-dynamic`)                                                                                           |
| GET    | `/api/admin/chats/[sessionId]`            | `app/api/admin/chats/[sessionId]/route.ts` | Get messages for session (supports `lastMessageAt`, `before` params). Auto-marks user messages as "read", auto-updates "new" sessions to "active" |
| POST   | `/api/admin/chats/[sessionId]`            | same file                                  | Admin sends reply → auto disables auto-reply (handover)                                                                                           |
| POST   | `/api/admin/chats/[sessionId]/auto-reply` | `.../auto-reply/route.ts`                  | Toggle AI auto-reply (boolean)                                                                                                                    |
| POST   | `/api/admin/chats/[sessionId]/close`      | `.../close/route.ts`                       | Set session status to "resolved"                                                                                                                  |
| GET    | `/api/admin/chats/[sessionId]/search`     | `.../search/route.ts`                      | Search messages by keyword (`?q=xxx`)                                                                                                             |
| PUT    | `/api/admin/chats/[sessionId]/status`     | `.../status/route.ts`                      | Update session status: `new                                                                                                                       | active | follow_up | resolved | spam` |

#### Webhook

| Method | Route                | File                             | Description                                                                                                                                                                                      |
| ------ | -------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| POST   | `/api/webhooks/line` | `app/api/webhooks/line/route.ts` | LINE webhook: validates signature, parses admin reply commands (`!{shortId} {msg}` for specific session, `ตอบ {msg}` / `> {msg}` / `. {msg}` for latest active session). Saves admin reply to DB |

---

## 4. Authentication & Middleware

### NextAuth v5 Configuration

- **File**: `auth.ts` + `auth.config.ts`
- **Strategy**: JWT (no database sessions)
- **Provider**: Credentials (2 paths)
  - **Magic Link** (via LINE): token param → `TursoAuthRepository.consumeMagicLink(token)`
  - **Username/Password**: (future) → `TursoAuthRepository.getUserByUsername()` + bcrypt compare
- **JWT Callback**: stores `role` and `id` in token
- **Session Callback**: exposes `role` and `id` to client

### Middleware (`middleware.ts`)

- Matcher: `/admin/:path*`, `/api/admin/:path*`
- `/api/admin/*` → returns 401 if not logged in
- `/admin/*` (except `/admin/login`) → redirects to `/admin/login` if not logged in

---

## 5. Multi-Template System

3 switchable UI templates that completely change the look:

| Template Key        | Name                | Description                       |
| ------------------- | ------------------- | --------------------------------- |
| `premium`           | Premium             | Modern corporate design (default) |
| `terminal`          | Terminal            | Hacker/CLI-style design           |
| `retroTechMagazine` | Retro Tech Magazine | Retro/magazine style              |

### How it works

1. **`useTemplateStore`** (Zustand + persist as `clean-code-template-storage`)
   - `template: TemplateType` — current template
   - `hasSeenOnboarding: boolean` — first-visit onboarding flag
2. **`<TemplateSwitcher />`** — rendered in Root Layout, allows switching templates
3. **Each page's `View` component** checks `useTemplateStore` and renders the matching sub-view:
   - `HomePremiumView` / `HomeTerminalView` / `HomeRetroTechMagazineView`
   - Same pattern for About, Contact, Portfolio, Services, Privacy, Terms
4. **Layout Templates** — `MainPremiumTemplate`, `MainTerminalTemplate`, `MainRetroTechMagazineTemplate` (Navbar + Footer per template)
5. **Onboarding** — configurable via `SITE.templateSwitch.onboardingType`: `"boot" | "spotlight" | "glitch" | "mascot" | "none"`
6. **Template Switcher Views** — `TemplateSwitcherPremiumView`, `TemplateSwitcherRetroTechMagazineView`, `TemplateSwitcherTerminalView`

### Component Structure (per feature)

```
src/presentation/components/{feature}/
├── {Feature}View.tsx          ← Entry: reads template store, dispatches to sub-view
├── views/
│   ├── {Feature}PremiumView.tsx
│   ├── {Feature}TerminalView.tsx
│   └── {Feature}RetroTechMagazineView.tsx
└── components/                ← Shared or template-specific sub-components
    ├── premium/
    ├── terminal/
    └── retro/
```

---

## 6. Chat System

### Customer-Facing Chat (`<AIChatBubble />`)

- Rendered in `(main)/layout.tsx` on all public pages
- **Store**: `useChatStore` (Zustand persist as `clean-code-chat-storage`)
  - Persists: `sessionId`, `messages`, `customerInfo`
  - Actions: `registerCustomer`, `sendMessage`, `syncMessages`, `loadMoreHistory`, `markAsRead`
- **Flow**:
  1. Customer enters name + phone → `POST /api/chat/init` → gets/restores session
  2. Customer sends message → `POST /api/chat` → AI responds (or draft if handover mode)
  3. Polling via `GET /api/chat/sync` with `lastMessageAt` for delta updates
  4. `POST /api/chat/[sessionId]/read` marks messages as read

### Admin Chat Console (`/admin/chat`)

- Full dashboard with session sidebar + message panel
- **Features**: tabs (Active/Follow-up/New/All), message search, status management, AI auto-reply toggle, resolve chat
- **Polling**: sessions list every 5s, messages every 3s
- **Handover**: when admin replies, `autoReply` is auto-disabled; AI responses become draft suggestions

### LINE Integration

- Admin gets notified via LINE push message when customer sends a message
- Admin can reply via LINE using commands:
  - `!{shortId} {message}` — reply to specific session
  - `ตอบ {message}` or `> {message}` or `. {message}` — reply to latest active session
- LINE webhook at `/api/webhooks/line` verifies signature and saves admin reply

### Message Status Tracking

| Status      | Meaning                                                |
| ----------- | ------------------------------------------------------ |
| `sent`      | Message saved to DB                                    |
| `delivered` | Customer's browser received it (sync API auto-updates) |
| `read`      | Customer/Admin opened the chat (explicit mark-as-read) |

### AI Response Strategy (`POST /api/chat`)

1. Try simple keyword match (`getSimpleResponse`) from knowledge base
2. If OpenAI key available → call GPT-3.5-turbo with knowledge prompt
3. If Google AI key available → call Gemini Pro with knowledge prompt
4. Fallback → generic Thai response

---

## 7. Presenter Pattern (Clean Architecture)

Each feature follows this pattern:

### Server-Side (SSR)

```
src/presentation/presenters/{feature}/
├── {Feature}Presenter.ts              ← Pure presenter class
├── {Feature}PresenterServerFactory.ts ← createServer{Feature}Presenter()
│     → Instantiates StaticXxxRepository + {Feature}Presenter
│     → Returns: { getViewModel(), generateMetadata() }
└── {Feature}PresenterClientFactory.ts ← createClient{Feature}Presenter()
```

### Client-Side (Hydration)

```
src/presentation/presenters/{feature}/
└── use{Feature}Presenter.ts           ← React hook
      → Uses initialViewModel from SSR
      → Can re-fetch on client if needed
```

### Features with Presenters

| Feature        | Presenter                | Server Factory                       | Client Hook                 |
| -------------- | ------------------------ | ------------------------------------ | --------------------------- |
| Home           | `HomePresenter`          | `createServerHomePresenter`          | `useHomePresenter`          |
| About          | `AboutPresenter`         | `createServerAboutPresenter`         | `useAboutPresenter`         |
| About CV       | `TeamMemberCVPresenter`  | `createServerCVPresenter`            | —                           |
| Contact        | `ContactPresenter`       | `createServerContactPresenter`       | `useContactPresenter`       |
| Portfolio      | `PortfolioPresenter`     | `createServerPortfolioPresenter`     | `usePortfolioPresenter`     |
| Project Detail | `ProjectDetailPresenter` | `createServerProjectDetailPresenter` | `useProjectDetailPresenter` |
| Services       | `ServicesPresenter`      | `createServerServicesPresenter`      | `useServicesPresenter`      |
| Promo          | `PromoPresenter`         | `createServerPromoPresenter`         | `usePromoPresenter`         |

---

## 8. Repository Interfaces (Domain Contracts)

### `IChatRepository` — Chat data access

- `createSession`, `getSession`, `getAllSessionsWithLatestMessage`
- `addMessage`, `getMessagesBySession`, `getNewMessages`, `searchMessages`
- `updateSessionStatus`, `updateMessageStatus`, `toggleAutoReply`
- `getSessionByShortId`, `getLatestActiveSession`, `getLatestSessionByPhone`

### `IProjectRepository` — Project/portfolio data

- Entity: `Project` (id, slug, title, category, description, thumbnail, images, technologies, features, client, projectDate, liveUrl, githubUrl, isFeatured, status, viewCount, displayOrder, isCleanCode, isFuture)
- Methods: `getById`, `getBySlug`, `getAll`, `query`, `getFeatured`, `getCleanCodeProjects`, `getStats`

### `IServiceRepository` — Services data

- Entity: `Service` (id, title, description, icon, category, features, pricingInfo, sortOrder, isActive)
- Methods: `getById`, `getAll`, `query`, `getActive`, `getStats`

### `ITeamMemberRepository` — Team members

- Entity: `TeamMember` (id, name, role, bio, avatar, social links, sortOrder, isActive, hasCV)
- Methods: `getActiveMembers`, `getAll`, `getCVByMemberId`

### Other Interfaces

- `IHomeStatsRepository`, `ITechnologyRepository`, `ITestimonialRepository`

### Implementations

| Interface                | Static (for portfolio data)   | Turso (for live data) |
| ------------------------ | ----------------------------- | --------------------- |
| `IProjectRepository`     | `StaticProjectRepository`     | —                     |
| `IServiceRepository`     | `StaticServiceRepository`     | —                     |
| `ITeamMemberRepository`  | `StaticTeamMemberRepository`  | —                     |
| `IHomeStatsRepository`   | `StaticHomeStatsRepository`   | —                     |
| `ITechnologyRepository`  | `StaticTechnologyRepository`  | —                     |
| `ITestimonialRepository` | `StaticTestimonialRepository` | —                     |
| `IChatRepository`        | —                             | `TursoChatRepository` |
| `IAuthRepository`        | —                             | `TursoAuthRepository` |

---

## 9. Zustand Stores

### `useTemplateStore` — Template switching

- **Persist key**: `clean-code-template-storage`
- **State**: `template: "premium" | "terminal" | "retroTechMagazine"`, `hasSeenOnboarding: boolean`
- **Actions**: `setTemplate()`, `setHasSeenOnboarding()`

### `useChatStore` — Customer chat

- **Persist key**: `clean-code-chat-storage`
- **Persisted fields**: `sessionId`, `messages`, `customerInfo`
- **State**: `isOpen`, `messages: ChatMessage[]`, `isLoading`, `sessionId`, `customerInfo`, `error`, `hasMoreHistory`
- **Actions**: `toggleChat`, `openChat`, `closeChat`, `registerCustomer`, `sendMessage`, `syncMessages`, `loadMoreHistory`, `markAsRead`, `clearHistory`

---

## 10. CSS & Styling

### Structure (`public/styles/`)

```
public/styles/
├── index.css          ← Entry point: @import "tailwindcss" + all below
├── theme.css          ← CSS custom properties / design tokens
├── base.css           ← Base resets and typography
├── components.css     ← Component-level styles
├── utilities.css      ← Custom utility classes
├── dark.css           ← Dark mode overrides
├── backend.css        ← Admin panel styles
├── landing.css        ← Landing/home page styles
└── components/
    └── chat.css       ← Chat widget styles
```

- **Dark mode**: via `next-themes` ThemeProvider with `attribute="class"` + `@custom-variant dark`
- **Tailwind v4**: uses `@tailwindcss/postcss` plugin
- **Import path in Root Layout**: `import "../public/styles/index.css"`

---

## 11. Providers & Utilities

### `XRayProvider` (debug mode)

- Toggle via `Ctrl+Shift+X` (or `Cmd+Shift+X`)
- Adds `xray-active` class to `<body>`
- Used with `<XRayWrapper>` and `<XRayToggle>` components

### Layout Components

- `<MainLayout>` — dispatches to template-specific layout (`MainPremiumTemplate` / `MainTerminalTemplate` / `MainRetroTechMagazineTemplate`)
- `<Navbar>` — navigation bar (per template)
- `<Footer>` — footer (per template)
- `<CustomCursor>` — custom cursor effect
- `<TemplateSwitcher>` — UI for switching templates
- `<TemplateOnboarding>` — first-visit onboarding (boot/spotlight/glitch/mascot)

---

## 12. Naming Conventions & Import Aliases

| Convention                     | Example                                                                                   |
| ------------------------------ | ----------------------------------------------------------------------------------------- |
| **Import alias**               | `@/src/...`, `@/app/...`                                                                  |
| **Page files**                 | `page.tsx` (Next.js convention)                                                           |
| **Layout files**               | `layout.tsx`                                                                              |
| **View components**            | `{Feature}View.tsx` (entry), `{Feature}PremiumView.tsx` (template-specific)               |
| **Presenters**                 | `{Feature}Presenter.ts`, `{Feature}PresenterServerFactory.ts`, `use{Feature}Presenter.ts` |
| **Repository interfaces**      | `I{Entity}Repository.ts`                                                                  |
| **Repository implementations** | `Static{Entity}Repository.ts`, `Turso{Entity}Repository.ts`                               |
| **Static data**                | `{entity}.static.ts`                                                                      |
| **Mock data**                  | `{entity}.mock.ts`                                                                        |
| **Master data**                | `src/data/master/{entity}.ts`                                                             |
| **Stores**                     | `use{Name}Store.ts` or `{name}-store.ts`                                                  |
| **CSS**                        | `public/styles/{name}.css`                                                                |

---

## 13. Database Scripts

```bash
npm run db:migrate        # Run Turso migrations
npm run db:seed           # Seed with starter data
npm run db:seed:mock      # Seed with mock data
npm run db:reset          # Reset + re-seed starter
npm run db:reset:mock     # Reset + re-seed mock
```

---

## 14. Site Configuration (`src/data/master/site.ts`)

```ts
SITE.title = "Clean Code 1986";
SITE.company.name = "CleanCode 1986";
SITE.contact.email = "cleancode1986@gmail.com";
SITE.contact.phone = "089-484-7773";
SITE.contact.lineId = "@marosdee7";
SITE.templateSwitch.onboardingType = "mascot"; // boot | spotlight | glitch | mascot | none
```

---

## 15. Quick Reference — สร้างหน้าใหม่

1. สร้างไฟล์ `app/(main)/{feature}/page.tsx`
2. สร้าง Presenter: `src/presentation/presenters/{feature}/{Feature}Presenter.ts`
3. สร้าง Server Factory: `{Feature}PresenterServerFactory.ts`
4. สร้าง Client Hook: `use{Feature}Presenter.ts`
5. สร้าง View: `src/presentation/components/{feature}/{Feature}View.tsx`
6. สร้าง Template Views: `views/{Feature}PremiumView.tsx`, `{Feature}TerminalView.tsx`, `{Feature}RetroTechMagazineView.tsx`
7. (ถ้าต้องการ) สร้าง Repository Interface: `src/application/repositories/I{Entity}Repository.ts`
8. (ถ้าต้องการ) สร้าง Static/Turso Repository Implementation

---

_Last updated: 2025-04-22_
