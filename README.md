# Premium Split-Screen Portfolio Website

A modern personal portfolio website inspired by high-end creative agency aesthetics, featuring a signature **50/50 light/dark split-screen hero**, an **artistic orange watercolor paint splash**, a centered portrait, and an editorial layout.

Built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## ✨ Key Features

- **Signature Split-Screen Hero**:
  - Rounded outer card container (`24px` border radius) with floating shadow.
  - 50/50 split background: Warm off-white (`#F3F3F1`) on the left and deep charcoal (`#171717`) on the right.
  - Multi-layered, organic orange watercolor & ink spatter SVG graphic (`PaintSplash.tsx`) spreading across both halves.
  - Centered professional portrait cut-out overlapping the split.
  - High-impact headline in modern bold typography with an outlined minimal `[ GET IN TOUCH ]` button that fills with orange on hover.
  - Desktop vertical social media bar on the lower left.
  - Animated vertical `SCROLL —` indicator on the lower right.
- **Dark & Light Mode**:
  - Global theme switch with animated toggle switch.
  - Automatically respects OS system preference on first visit.
  - Persists preference in `localStorage`.
- **Editorial Typography & Minimalist Aesthetic**:
  - Clean layout using *Plus Jakarta Sans* & *Space Grotesk*.
  - Generous whitespace, subtle borders, and zero clutter.
- **Interactive Sections**:
  - **About Me**: Two-column layout with a bold introductory statement, personal overview card (location, education, interests, current focus), and personal narrative.
  - **My Skills**: Grouped into Frontend, Backend, and Design/Tools with category filtering and interactive tags (no boring percentage bars).
  - **Selected Work**: Editorial project showcase with project numbers (`01`, `02`), image hover zoom, category badges, tech stacks, GitHub, and live preview links.
  - **Experience & Education**: Clean vertical timeline with year badges and highlight bullets.
  - **Achievements & Certifications**: Typography-based cards for hackathons, honors, and certificates.
  - **Contact**: "Let's Work Together." CTA with direct email/social links and an interactive contact form.
  - **Footer**: Copyright, social links, and smooth "Back to top" button.
- **Fully Responsive**:
  - Mobile hamburger drawer menu.
  - Adapts fluidly from 320px mobile screens up to 4K displays.

---

## 🚀 How to Personalize the Website

All data and personal information have been separated into a single configuration file for effortless customization.

### 1. Update Your Information
Open `src/data/portfolioData.ts` and replace the placeholder fields:

```typescript
export const portfolioData = {
  personal: {
    name: "Alex Morgan",             // Replace [YOUR NAME]
    shortName: "Alex",               // Logo name before the orange dot (e.g., "Alex.")
    role: "Senior Creative Developer",// Replace [YOUR ROLE]
    headlineLine1: "Designing & Building",
    headlineLine2: "Creative Digital Products",
    location: "San Francisco, CA",
    email: "alex@example.com",
    availableForWork: true,
  },
  // Update social links, about biography, skills, projects, and career timeline...
};
```

### 2. Replace the Hero Portrait
To use your own photo:
1. Cut out your portrait so the background is transparent (PNG or WebP format).
2. Save it as `portrait.png` in the `public/` directory:
   ```
   public/portrait.png
   ```
3. The hero will automatically load your new portrait!

---

## 🛠️ Development & Deployment

### Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### Build for Production
```bash
npm run build
```
The optimized production bundle will be output to the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🎨 Color Palette Reference

- **Accent Orange**: `#F15A24` (Hover: `#e04913`)
- **Light Surface**: `#F3F3F1`
- **Dark Surface**: `#171717`
- **Card Dark Surface**: `#1E1E1E`
- **Background Light**: `#EBEBE8`
- **Background Dark**: `#0E0E0E`
