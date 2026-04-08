# VIBEZ – Hip-Hop Dance Studio

A modern React + Tailwind CSS website inspired by the [Vibez Hip-Hop Dance](https://vibez.qodeinteractive.com/hip-hop-dance/) template.

## ✨ Features

- **Full React SPA** – Single page app with smooth scroll navigation
- **Tailwind CSS** – Utility-first styling with custom theme
- **Dark urban aesthetic** – Black + neon yellow (#E8FF00) color palette
- **Bebas Neue + Barlow** fonts for the hip-hop look
- **Animated sections** – Scroll-reveal animations throughout
- **Animated counter stats** – Numbers count up on scroll
- **Interactive schedule** – Day-picker with booking states
- **Testimonial carousel** – Swipeable reviews
- **Contact form** – With success state
- **Gallery lightbox** – Click-to-expand gallery
- **Marquee ticker** – Animated scrolling text bar
- **Mobile responsive** – Full hamburger menu
- **Video section** – Play button with modal

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
hiphop-dance/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── MarqueeBar.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ClassesSection.jsx
│   │   ├── StatsSection.jsx
│   │   ├── VideoSection.jsx
│   │   ├── InstructorsSection.jsx
│   │   ├── ScheduleSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── PricingSection.jsx
│   │   ├── GallerySection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js` → `theme.extend.colors`
- **Fonts**: Change Google Fonts in `public/index.html` and `tailwind.config.js`
- **Content**: Edit each component file in `src/components/`
- **Images**: Replace placeholder divs with `<img>` tags pointing to your images

## 🛠 Tech Stack

- React 18
- Tailwind CSS 3
- Lucide React (icons)
- Google Fonts (Bebas Neue + Barlow)
