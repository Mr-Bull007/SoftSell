# SoftSell – Used Software License Resale Landing Page

SoftSell is a sleek, responsive one-page website built with React.js and TailwindCSS that enables users to sell unused software licenses. Designed as a fictional startup, this marketing site showcases the value proposition, process, customer testimonials, and contact options — making it perfect for SaaS resellers and similar domains.

---

## 🚀 Features

- 💡 Clear Hero Section with Call-to-Action
- 🧭 Sticky Navbar with Smooth Scroll Navigation
- 🌗 Dark/Light Mode Toggle
- ✨ Animations with Framer Motion
- 💬 Customer Testimonials (UI Faces Integration)
- 📱 Fully Responsive Design
- 🧾 Contact Form with Validation using `react-hook-form`
- 📈 SEO Meta Tags & Optimized Page Title
- 🍔 Hamburger Menu for Mobile Navigation

---

## 🛠️ Tech Stack

- **React.js**
- **Tailwind CSS**
- **Framer Motion** – for animations
- **React Hook Form** – for form validation
- **UI Faces** – avatar images for testimonials

---

## 📁 Folder Structure

src/
├── assets/ # Logo and image assets
├── components/
│ ├── Navbar.tsx
│ ├── Hero.tsx
│ ├── HowItWorks.tsx
│ ├── WhyChooseUs.tsx
│ ├── Testimonials.tsx
│ ├── ContactForm.tsx
│ ├── ThemeToggle.tsx
├── App.tsx
├── index.tsx


---

## 🧪 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/softsell.git
cd softsell
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
The site will be available at http://localhost:5173.

## 🔧 Customization
- Logo: Replace /src/assets/logo-32x32.png with your actual brand image.

- Theme Colors: Customize tailwind.config.ts to suit your palette.

- SEO: Modify meta tags in index.html.

## 📦 Build for Production

```bash
npm run build
```

## 📌 To Do (Optional Enhancements)
- Integrate backend for form submission.

- Add actual payment/resale logic.

- Deploy via Vercel/Railway/Netlify.

## 🙌 Acknowledgements
- UI Faces for testimonial avatars.

- HeroIcons for clean icons.

- Framer Motion for animation magic.

## 📃 License
This project is for educational/demo purposes. Customize and reuse freely.
