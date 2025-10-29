# Digital Birthday Letter - Project TODO

## Setup & Configuration
- [x] Initialize React + Vite project
- [x] Install dependencies (framer-motion, react-tsparticles, tailwindcss, react-icons)
- [x] Configure TailwindCSS
- [x] Setup fonts (Inter, Dancing Script) in index.html
- [x] Configure color palette and design tokens in index.css

## Scene Components
- [x] Scene1Intro.tsx - Intro scene dengan typing effect
- [x] Scene2Message.tsx - Ucapan utama dengan animasi
- [x] Scene3Appreciation.tsx - Scene apresiasi dengan fade-up
- [x] Scene4Letter.tsx - Hidden letter dengan flip animation
- [x] Scene5WishBoard.tsx - Wish board dengan localStorage
- [x] Scene6Ending.tsx - Ending scene dengan efek partikel

## Utility Components
- [x] ParticlesBackground.tsx - Komponen partikel tsParticles
- [x] TransitionWrapper.tsx - Wrapper untuk transisi antar scene

## Core Features
- [x] Scene navigation (Next button logic)
- [x] Framer Motion AnimatePresence implementation
- [x] Typing effect animation untuk intro
- [x] Flip animation untuk envelope
- [x] Parallax effect di appreciation scene
- [x] Floating feather animation
- [x] Pulsing heart animation
- [x] Bokeh/snow particle effect di ending

## localStorage Features
- [x] Implement localStorage untuk Wish Board
- [x] Save dan retrieve wish data
- [x] Display wishes dengan animasi

## Styling & Design
- [x] Apply soft pink (#FFE6F2) color scheme
- [x] Apply baby blue (#CDEBFF) color scheme
- [x] Apply cream (#FFF8F0) color scheme
- [x] Implement glassmorphism effects
- [x] Implement soft shadows
- [x] Implement subtle glow effects
- [x] Implement rounded corners (2xl+)
- [x] Ensure responsive design (mobile-first)

## App Structure
- [x] Setup App.tsx dengan scene management
- [x] Implement scene switching logic
- [x] Setup main.tsx entry point
- [x] Configure index.css global styles

## Testing & Deployment
- [ ] Test semua scene transitions
- [ ] Test localStorage functionality
- [ ] Test responsiveness di berbagai device
- [ ] Ensure no console errors
- [ ] Prepare untuk deployment ke Vercel
