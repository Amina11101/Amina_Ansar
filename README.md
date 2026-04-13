# Portfolio - React + TypeScript + Vite

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features fast development experience and optimized production builds.

## 🚀 Features

- **React 19** - Latest React with hooks and modern patterns
- **TypeScript** - Full type safety for better development experience
- **Vite** - Lightning-fast build tool and development server
- **Responsive Design** - Mobile-first, fully responsive layout
- **Component-Based** - Modular component architecture for easy maintenance
- **HMR** - Hot Module Replacement for instant updates during development
- **ESLint** - Code quality and consistency

## 📋 Project Structure

```
portfolio-react/
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Projects.tsx   # Projects showcase
│   │   └── Footer.tsx     # Footer component
│   ├── pages/             # Page components
│   ├── styles/            # Global and component styles
│   │   └── portfolio.css  # Portfolio-specific styles
│   ├── App.tsx            # Main application component
│   ├── App.css            # App component styles
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html             # HTML entry point
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # TypeScript app configuration
├── tsconfig.node.json     # TypeScript node configuration
├── eslint.config.js       # ESLint configuration
└── package.json           # Project dependencies
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

5. **Run ESLint:**
   ```bash
   npm run lint
   ```

## 🎨 Customization

### Updating Portfolio Content

1. **Header Navigation** - Edit `src/components/Header.tsx` to customize navigation links
2. **Hero Section** - Modify `src/components/Hero.tsx` for your welcome message
3. **Projects** - Update project list in `src/components/Projects.tsx`
4. **Footer** - Update social links in `src/components/Footer.tsx`

### Styling

- Global styles are in `src/index.css`
- Component-specific styles are in `src/components/` folders
- Portfolio-wide styles are in `src/styles/portfolio.css`
- Color scheme uses CSS variables defined in `:root`

## 🔧 Technologies Used

- **React** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Build tool and development server
- **CSS3** - Modern styling with flexbox and grid

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 📝 License

This project is open source and available for personal and commercial use.
