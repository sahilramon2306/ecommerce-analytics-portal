# E-Commerce Seller Analytics & Catalog Portal

A responsive e-commerce seller dashboard built with **React, TypeScript, Vite, Material UI, and Recharts**. This application provides an interactive interface for monitoring business analytics, exploring product inventory, filtering products, and managing catalog items.

## Features

- **Dashboard Analytics** — View today's revenue, total orders, and active inventory.
- **Revenue Trend Chart** — Visualize revenue and sales volume over seven days.
- **Category Sales Analytics** — Compare product category sales using charts.
- **Product Catalog** — Browse products through a responsive card-based layout.
- **Global Product Search** — Search products by title or SKU in real time.
- **Product Filters** — Filter products by category and creation date.
- **Add New Product** — Add inventory items through an interactive form.
- **Product Quick View** — View product details, pricing, stock, and ratings.
- **Cart Interaction** — Add products to the order and update the cart badge.
- **Light and Dark Mode** — Switch between themes with customized color palettes.
- **Responsive Design** — Adapt the interface to desktop, tablet, and mobile screens.
- **Mock Data** — Run the frontend without requiring a backend API.

## Tech Stack

- **React** — Component-based user interface development.
- **TypeScript** — Static typing and improved code reliability.
- **Vite** — Development server and production build tooling.
- **Material UI (MUI)** — UI components and responsive layouts.
- **Emotion** — Styling engine used by Material UI.
- **Recharts** — Data visualization and analytics charts.
- **Material Icons** — Interface icons.
- **Day.js** — Date handling.
- **MUI Date Pickers** — Date selection controls.
- **CSS** — Custom styling and responsive design.

## Project Structure

```text
ecommerce-analytics-portal/
├── public/
├── src/
│   ├── components/
│   │   ├── analytics/
│   │   │   ├── CategoryBarChart.tsx
│   │   │   └── RevenueTrendChart.tsx
│   │   ├── catalog/
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductGrid.tsx
│   │   ├── filters/
│   │   │   └── ProductFilterBar.tsx
│   │   ├── layout/
│   │   │   ├── TopNavBar.tsx
│   │   │   └── HeroBanner.tsx
│   │   └── modals/
│   │       ├── AddProductFAB.tsx
│   │       └── ProductDetailModal.tsx
│   ├── data/
│   │   └── mockData.ts
│   ├── styles/
│   │   ├── global.css
│   │   ├── TopNavBar.css
│   │   ├── HeroBanner.css
│   │   ├── ProductFilterBar.css
│   │   ├── RevenueTrendChart.css
│   │   ├── CategoryBarChart.css
│   │   ├── ProductGrid.css
│   │   ├── ProductCard.css
│   │   ├── ProductDetailModal.css
│   │   └── AddProductFAB.css
│   ├── theme/
│   │   ├── palette.ts
│   │   └── ThemeContext.tsx
│   ├── types/
│   │   └── purchase.ts
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- Git (optional, for version control)

Verify your installation:

```bash
node -v
npm -v
```

## Installation and Setup

### 1. Clone the repository

Replace the placeholder with your actual GitHub repository URL.

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate to the project directory

```bash
cd ecommerce-analytics-portal
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal. The default Vite development URL is usually:

http://localhost:5173

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server. |
| `npm run build` | Runs the TypeScript build and generates production assets. |
| `npm run preview` | Previews the production build locally. |

### Build for Production

Run:

```bash
npm run build
```

The generated production files will be available in the `dist/` directory.

## Theme Configuration

The application supports light and dark modes with customized colors.

| Property | Light Theme | Dark Theme |
|---|---|---|
| Primary color | `#FF8C00` | `#FFA726` |
| Secondary color | `#3F51B5` | `#7986CB` |
| Background | `#FAFAFA` | `#121212` |

Theme configuration is maintained in `src/theme/palette.ts`, while `src/theme/ThemeContext.tsx` manages theme state and switching.

## Application Architecture

The project follows a component-based architecture.

- **`App.tsx`** coordinates application state and integrates the dashboard components.
- **`components/`** contains reusable interface components organized by responsibility.
- **`data/mockData.ts`** provides initial product, revenue, category sales, and store statistics data.
- **`types/purchase.ts`** defines TypeScript interfaces and types shared across the application.
- **`theme/`** manages Material UI theme configuration and light/dark mode.
- **`styles/`** contains global and component-specific CSS files.

React state manages product updates, search and filtering, cart count, product selection, and notifications. Props allow the parent and child components to communicate.

## Data Management

This project uses typed mock datasets and local React state. It does not currently require a backend API or database.

Product additions and cart interactions update the frontend state for the current application session. These changes are not permanently persisted and may be lost when the page is reloaded.

## Validation

The production build was tested with:

```bash
npm run build
```

The TypeScript build and Vite production build completed successfully without compilation errors.

Vite reported a JavaScript bundle-size warning because a minified chunk exceeded 500 kB. This warning does not prevent the production build from completing.

## Future Enhancements

- Integrate a backend API and database.
- Persist product inventory and cart data.
- Connect analytics to real order and revenue data.
- Add authentication and role-based access control.
- Improve bundle performance through code splitting.
- Add automated unit and component tests.

## License

No license has been specified for this project. Add an appropriate `LICENSE` file if you intend to distribute it under an open-source license.

---

**Built with React, TypeScript, Vite, Material UI, and Recharts.**