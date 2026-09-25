# Product Admin Dashboard

A modern Product Admin Dashboard built using **Next.js 16**, **React**, **Tailwind CSS**, **Zustand**, **Axios**, and **DummyJSON API** for the Nexgensis React Developer Assignment.

---

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- Zustand (State Management)
- Axios (API Requests)
- Sonner (Toast Notifications)
- Remix Icons

---

## Features

- User Login using DummyJSON Authentication API.
- Protected Admin Routes with Zustand.
- Product Listing with Pagination.
- Search Products with 500ms Debounce.
- Product Details Page.
- Responsive UI (Desktop & Mobile).
- Loading and Error States.

---

## Project Structure

app/
├── page.js                  # Login Page
├── layout.js                # Root Layout
├── admin/
│   ├── layout.jsx           # Protected Layout + Sidebar
│   ├── page.jsx             # Dashboard
│   └── products/
│       ├── page.jsx         # Product List
│       └── [id]/
│           └── page.jsx     # Product Details
│
components/
├── Sidebar.jsx
├── NavBar.jsx
└── Table.jsx
│
config/
└── axios.js
│
services/
├── authService.js
└── productService.js
│
store/
├── Auth.js
└── Operation.js
│
utils/
└── hooks.js                 # useDebounce Hook

---

## Authentication Flow

1. User enters username and password.
2. Request is sent to DummyJSON Login API.
3. User data and access token are stored in Zustand.
4. `/admin` routes are protected using `admin/layout.jsx`.
5. Logout clears Zustand state and redirects to Login.

---

## API Endpoints

### Login

POST /auth/login

### Get Products

GET /products?limit=6&skip=0

### Search Products

GET /products/search?q=iphone

### Product Details

GET /products/:id

---

## State Management

### Auth Store

- user
- token
- isAuthenticated
- login()
- logout()

### Operation Store

- search
- setSearch()

---

## Installation

```bash
git clone <repository-url>
cd product-admin-dashboard
npm install
npm run dev