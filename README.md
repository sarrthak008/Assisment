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

## 📁 Project Structure

```text
product-admin-dashboard/
│
├── app/
│   ├── layout.js                 # Root Layout
│   ├── page.js                   # Login Page
│   ├── globals.css
│   │
│   └── admin/
│       ├── layout.jsx            # Protected Admin Layout
│       ├── page.jsx              # Dashboard
│       │
│       └── products/
│           ├── page.jsx          # Products List
│           └── [id]/
│               └── page.jsx      # Product Details
│
├── components/
│   ├── Sidebar.jsx
│   ├── NavBar.jsx
│   └── Table.jsx
│
├── config/
│   └── axios.js                  # Axios Instance
│
├── services/
│   ├── authService.js            # Login API
│   └── productService.js         # Product APIs
│
├── store/
│   ├── Auth.js                   # Authentication Store
│   └── Operation.js              # Search Store
│
├── utils/
│   └── hooks.js                  # useDebounce Hook
│
├── public/
│   └── images/
│       └── bg.jpeg               # Login Background
│
├── package.json
└── README.md
```


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