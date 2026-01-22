# React SPA - Single Page Application

A simple React Single Page Application demonstrating core SPA concepts with state management and conditional rendering.

## Features

- **3 Page Navigation**: Home, About, Contact pages
- **State-Based Routing**: Uses React useState for page navigation
- **Responsive Header**: Sticky navigation with hover effects
- **Professional Styling**: Modern gradient design with smooth transitions

## Demo

🚀 **Live Demo**: [https://react-spa-demo.vercel.app](https://react-spa-demo.vercel.app)

## Tech Stack

- React 18+
- Vite
- CSS3

## How It Works

The app uses React state to manage which page is displayed instead of traditional routing:

```jsx
const [page, setPage] = useState("home");
```

When a navigation link is clicked, the state updates and React conditionally renders the appropriate page component.

## Project Structure

```
src/
├── component/      # Reusable components (Navbar, Footer)
├── pages/          # Page components (Home, About, Contact)
├── layout/         # Layout wrapper (MainLayout)
├── App.jsx         # Main app controller with state
└── main.jsx        # Entry point
```

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

## Learning Concepts

This project demonstrates:
- React Components
- useState Hook
- Conditional Rendering
- Single Page Application (SPA) Architecture
- Component-based Folder Structure

