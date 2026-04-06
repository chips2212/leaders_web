# Project Context: "Crisis-Forged Leadership" Website

## 1. Project Overview
We are building a high-performance, static website for a collective of coaches, trainers, and consultants specializing in **leadership development in VUCA (Volatility, Uncertainty, Complexity, Ambiguity) contexts**.

**Core Value Proposition:** "Leadership Forged in Crisis. Applied Everywhere."
Our unique selling point is our **humanitarian DNA**. Our methods are proven in war zones and disaster response (where stakes are life/death), making them uniquely robust for corporate, tech, finance, and sports sectors facing volatility.

## 2. Target Audience & Strategy
- **Primary Audience:** NGOs, Humanitarian Aid Organizations, UN Agencies (Operating in conflict/crisis zones).
- **Secondary Audience:** High-stakes sectors: Tech/AI, Finance/Fintech, Energy/Logistics, Professional Sports/Esports.
- **Strategic Narrative:** We do not just teach theory. We transfer "field-tested" survival and adaptation strategies from humanitarian crises to corporate volatility.
- **Tone:** Authoritative, calm, direct, empathetic, urgent but not alarmist. No corporate fluff.

## 3. Technical Stack Requirements
- **Framework:** Next.js (App Router) or React Static Site Generator.
- **Styling:** Tailwind CSS (for utility-first, responsive design).
- **Content Management:** Markdown/MDX files stored in `/content` (headless CMS approach).
- **Performance:** Critical. Must load instantly on low-bandwidth connections (for field workers). Optimize images (WebP), lazy load components.
- **Security:** High emphasis on data privacy. No unnecessary third-party trackers. GDPR compliant.

## 4. Site Architecture & File Structure
The project follows a strict directory structure. All content is data-driven from the `/content` folder.

```text
/
├── /content              # Source of truth for all text
│   ├── /services         # 6 core services (Coaching, Training, OD, Mentoring, Crisis, Consulting)
│   ├── /sectors          # Sector pages (Humanitarian [Primary], Tech, Finance, Energy, Sports)
│   ├── /team             # Coach profiles (Highlighting field experience)
│   ├── /case-studies     # Paired cases (NGO vs. Corporate application)
│   └── /insights         # Blog/Articles connecting crisis lessons to industry
├── /src
│   ├── /components       # Reusable UI (Header, Footer, ServiceMatrix, ParallelBox, ContactForm)
│   ├── /app (or /pages)  # Route handlers matching the content structure
│   └── /styles           # Global CSS, Tailwind config
└── /public               # Static assets (optimized images, PDF downloads)