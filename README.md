# RoadLine Trucking Website

A modern, responsive, professional frontend website for **RoadLine Trucking**, a US-based trucking and logistics company.

This project is built with React and Vite, designed with zero backend dependencies, making it lightweight and ideal for DevOps practice (GitHub Actions, Docker, SonarQube, Trivy, AWS ECR, Kubernetes).

---

## Features & Sections

- **Header**: Navigation menu (Home, Services, About, Fleet, Contact) and "Get a Quote" call-to-action button.
- **Hero Section**: Catchy title, tagline, call-to-action buttons, and modern logistics visual theme.
- **Services**: 4 dedicated logistics service cards (FTL, LTL, Expedited Freight, Dedicated Transportation).
- **About Us**: Company overview ("Moving America Forward") with key statistics (10+ Years Experience, 50+ Trucks, 48 States Covered, 99% On-Time Delivery).
- **Fleet**: Cards showcasing Modern Trucks, GPS Tracking, Regular Maintenance, and Professional Drivers.
- **Why Choose Us**: Key highlights including 24/7 Dispatch, Real-Time Tracking, Experienced Drivers, Safety First, and Reliable Delivery.
- **Quote Form**: Fully interactive frontend quote request form with required field validation.
- **Contact**: Company details (Chicago, IL, Phone, Email, 24/7 Dispatch hours).
- **Footer**: Brand links, quick site navigation, and copyright information.

---

## Technology Stack

- **React 18**
- **Vite**
- **JavaScript (ES6+)**
- **CSS3 (Custom CSS variables & Responsive Flex/Grid)**
- **Lucide React** (Icons)

---

## Getting Started

### Prerequisites

Make sure you have Node.js (v18+) and `npm` installed on your machine.

### Installation

Install project dependencies:

```bash
npm install
```

### Development

Start the local development server with hot module reloading:

```bash
npm run dev
```

### Code Linting

Run ESLint to verify code quality and formatting:

```bash
npm run lint
```

### Production Build

Build the production-ready static bundle:

```bash
npm run build
```

The compiled production files will be output to the `dist/` directory.

---

## Project Structure

```text
.
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Fleet.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── QuoteForm.jsx
│   │   ├── Services.jsx
│   │   └── WhyChooseUs.jsx
│   ├── styles/
│   │   ├── components.css
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
