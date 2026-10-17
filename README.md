# Syed Ahmed — Scientific Computing & Software Engineering Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-syed--ahmed.vercel.app-2C2A26?style=for-the-badge&logo=vercel&logoColor=white)](https://syed-ahmed.vercel.app)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-8E75C4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

A clean, editorial-grade technical portfolio showcasing engineering simulations, numerical approximation suites, systems-level data structures, and computational physics projects. Built with modern web technologies, responsive warm minimalist aesthetics, an interactive AI assistant, and direct Web3Forms contact integration.

---

## 🌟 Key Features

- **Scientific Computing & Engineering Showcase**: Detailed case studies for numerical methods (Newton-Raphson, Euler's method, Simpson's rule), structural beam deflection modeling, 2D heat transfer simulations, and low-level memory/DSA implementations in C & Java.
- **Dynamic Category Filtering**: Seamlessly filter projects across *Scientific Computing*, *Algorithms*, *Engineering*, and *Tools*.
- **Interactive Project Shortlist**: Visitors and recruiters can bookmark projects to discuss, calculate custom technical scopes, and forward them directly in inquiries.
- **Direct Contact & Inquiry Form**: Powered by [Web3Forms](https://web3forms.com/) for instant email delivery directly to the owner's inbox, with anti-spam honeypot verification, real-time loading states, one-click email copy, and direct telephone/social links.
- **AI Portfolio Assistant**: Integrated conversational assistant powered by Google's `@google/genai` (Gemini 2.5 Flash) trained to answer visitor queries about Syed's coursework, technologies, projects, and 2026 internship availability.
- **Dark & Light Mode Theme Toggle**: Instant, seamless switching between an artisanal warm minimalist cream palette (`#F5F2EB`) and an obsidian warm-charcoal dark theme (`#141311`), with automatic OS preference detection, persistent localStorage caching, and zero flicker on page load.
- **Warm Editorial Aesthetic**: Crafted with bespoke typography (`Playfair Display` + `Inter`), custom neutral palette, and smooth scrolling navigation.
- **Production-Ready Routing**: Configured with `vercel.json` rewrites and OpenGraph/JSON-LD schemas for search engines and social cards.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) | Component architecture, state transitions, hooks |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type checking, interfaces, safe props |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Responsive layout, custom typography, animations |
| **Bundler & Tooling** | [Vite 6](https://vitejs.dev/) | Lightning-fast HMR and optimized production bundling |
| **AI Integration** | [@google/genai](https://www.npmjs.com/package/@google/genai) | Gemini 2.5 Flash conversational assistant |
| **Form Handling** | [Web3Forms API](https://web3forms.com/) | Serverless contact and project inquiry email delivery |
| **Deployment** | [Vercel](https://vercel.com/) | Global edge hosting with single-page application routing |

---

## 📂 Project Structure

```text
├── components/
│   ├── About.tsx            # Engineering philosophy, education & technical arsenal
│   ├── Assistant.tsx        # Floating AI portfolio assistant interface
│   ├── CartDrawer.tsx       # Project shortlist drawer & inquiry initiation
│   ├── Checkout.tsx         # Detailed inquiry form with shortlisted projects
│   ├── Contact.tsx          # Web3Forms-integrated contact section & direct channels
│   ├── Footer.tsx           # Site footer with quick links, status & copyright
│   ├── Hero.tsx             # Editorial hero banner with smooth scroll actions
│   ├── Journal.tsx          # Technical articles & blog showcase
│   ├── JournalDetail.tsx    # Full-bleed article reading view
│   ├── Navbar.tsx           # Fixed glassmorphism navbar with shortlist counter
│   ├── ProductCard.tsx      # Project card with image fallbacks & case study preview
│   ├── ProductDetail.tsx    # In-depth project overview, tech stack & source links
│   └── ProductGrid.tsx      # Dynamic project list with category filter pills
├── services/
│   └── geminiService.ts     # Google Gemini API client & prompt context
├── constants.ts             # Project catalog, journal data, URLs & contact configs
├── types.ts                 # TypeScript types (Project, JournalArticle, ViewState, etc.)
├── index.html               # Entry HTML with SEO, OpenGraph & JSON-LD schema
├── index.tsx                # Application mounting entry point
├── App.tsx                  # Root component, view management & smooth scrolling
├── vercel.json              # Vercel deployment rewrites for SPA routing
├── vite.config.ts           # Vite bundler configuration & environment mappings
└── package.json             # Dependencies, scripts and package metadata
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version `v18.0.0` or higher recommended; v20+ preferred)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Syed-Ahmed4/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables** (Optional for Gemini Assistant):
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   > *Note: If no API key is specified, the assistant gracefully falls back to direct email inquiries.*

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the URL displayed in your terminal) to view the application.

5. **Build for Production**:
   ```bash
   npm run build
   ```
   The compiled assets will be output to the `dist/` directory.

6. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment on Vercel

This repository is optimized for one-click deployment on [Vercel](https://vercel.com):

1. Push this repository to your GitHub account.
2. In the Vercel dashboard, click **"Add New Project"** and import the repository.
3. Configure the build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add environment variables if applicable (`GEMINI_API_KEY`).
5. Click **Deploy**.

The included `vercel.json` ensures all nested URLs and page refreshes route seamlessly to `index.html`.

---

## 📬 Contact & Connect

**Syed Ahmed**  
*Computer Science Engineer · Scientific Computing Enthusiast*  
📍 Hyderabad, India  

- **Website**: [syed-ahmed.vercel.app](https://syed-ahmed.vercel.app)
- **Email**: [syedahmedsda@gmail.com](mailto:syedahmedsda@gmail.com)
- **LinkedIn**: [linkedin.com/in/syedahmed-/](https://www.linkedin.com/in/syedahmed-/)
- **GitHub**: [github.com/Syed-Ahmed4](https://github.com/Syed-Ahmed4)

---

## 📄 License

This project is licensed under the Apache License 2.0. See project files for terms.
