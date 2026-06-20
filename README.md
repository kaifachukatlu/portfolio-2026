# 🚀 Achukatulu Kaif - 3D Interactive Portfolio

A hyper-realistic, 3D interactive portfolio built for the future. Designed specifically to showcase my journey as an **AI Engineer**, **IoT Builder**, and **Patent Holder**. 

This portfolio features cutting-edge glassmorphism, physics-based 3D interactions (like a draggable realistic conference lanyard), smooth framer-motion animations, and a premium "Apple Vision Pro / Nothing OS" dark aesthetic.

![Portfolio Preview](./public/kaif-card.png)

## 🌟 Key Features

- **Hyper-Realistic 3D Lanyard:** A fully physics-driven, draggable 3D ID card using `@react-three/fiber`, `@react-three/rapier`, and a premium metallic PBR carabiner.
- **Dynamic Glassmorphism:** Sleek, premium translucent UI elements matching the modern dark-luxury aesthetic.
- **Scroll-Triggered Animations:** Smooth, cinematic reveal animations powered by `framer-motion`.
- **Fully Responsive:** Perfectly optimized for all screen sizes, from 4K desktop monitors to mobile devices.
- **Integrated Email System:** A functional contact form powered by EmailJS that sends inquiries directly to my inbox without a backend server.
- **Interactive Bento Grid:** A modern, asymmetrical grid layout to highlight key projects, skills, and patents.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **3D & Physics:** [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), [@react-three/rapier](https://github.com/pmndrs/react-three-rapier)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Form Handling:** [EmailJS](https://www.emailjs.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Feather / FontAwesome)

## 🚀 Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/kaifs-portfolio.git
   cd kaifs-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📬 Contact Setup (EmailJS)
To make the contact form work for your own fork:
1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Get your `Service ID`, `Template ID`, and `Public Key`.
3. Update the constants at the top of `src/components/Contact.tsx`.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

---
*Designed & Built by Achukatulu Kaif*
