# 🌿 Paradise Nursery

Paradise Nursery is a single-page e-commerce web application for a fictional online plant store. The app lets customers browse houseplants organized by category, add them to a shopping cart, adjust quantities, and view a running total — built as a demonstration of React + Redux state management for shopping cart functionality.

---

## 🏢 About the Company

**Paradise Nursery** is envisioned as a boutique online nursery specializing in houseplants for home and office spaces. The company's catalog is organized around plant benefits and use-cases rather than just plant type, making it easier for customers — especially first-time plant owners — to find plants that fit their needs.

- **Mission:** Make greenery accessible and easy to shop for, with clear categorization and transparent pricing.
- **Target audience:** Urban dwellers, plant beginners, and home/office decorators looking for low-maintenance greenery.
- **Product focus:** Houseplants grouped into curated categories (e.g. air-purifying, aromatic, succulents) rather than a generic "all plants" list.

> This is a portfolio/coursework project — Paradise Nursery is a fictional brand used to demonstrate front-end e-commerce functionality, not a real registered business.

---

## ✨ Features

### Product Listing Page
- Displays houseplants grouped into **3+ categories** (e.g. Air Purifying Plants, Aromatic Plants, Succulents)
- Each plant shows a **thumbnail image, name, and price**
- **"Add to Cart"** button per plant:
  - Adds the plant to the Redux cart store
  - Button **disables** and changes label once the item has been added
  - Increments the cart item count shown in the navbar

### Shopping Cart Page
- Lists every item currently in the cart, each with **thumbnail, name, and unit price**
- Shows the **subtotal per item** (unit price × quantity)
- Shows the **total cart amount** across all items
- **Increment / decrement** buttons to adjust quantity per item (auto-removes the item if quantity is decremented past 1)
- **Delete** button to remove an item from the cart entirely
- **Checkout** button — currently displays a "Coming Soon" message (checkout flow not yet implemented)
- **Continue Shopping** button — navigates back to the Product Listing page

### Shared Navigation
- Persistent **navbar** on both the Product Listing and Cart pages
- Links to **Home, Plants, and Cart**
- **Live cart icon counter** reflecting the total quantity of items in the cart, synced via Redux across pages

---

## 🛠️ Tech Stack

| Layer            | Technology                         |
|------------------|-------------------------------------|
| UI Library       | React                               |
| State Management | Redux Toolkit (`@reduxjs/toolkit`, `react-redux`) |
| Routing          | React Router (`react-router-dom`)   |
| Styling          | CSS                                 |
| Build Tool       | Create React App / Vite (per setup) |

---

## 📁 Project Structure

```
paradise-nursery/
├── public/
├── src/
│   ├── components/
│   │   ├── ProductList.jsx      # Product listing page, grouped by category
│   │   ├── ProductList.css
│   │   ├── CartItem.jsx         # Shopping cart page
│   │   ├── CartItem.css
│   │   └── Navbar.jsx           # (optional) shared navbar component
│   ├── redux/
│   │   └── CartSlice.jsx        # Redux Toolkit slice for cart state
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or later recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# Install dependencies
npm install

# Install Redux dependencies (if not already in package.json)
npm install @reduxjs/toolkit react-redux react-router-dom
```

### Running the app

```bash
npm start
```

The app will run at `http://localhost:3000` (or the port your build tool defaults to).

---

## 🧠 State Management Overview

Cart state is managed centrally in `CartSlice.jsx` using Redux Toolkit, exposing the following actions:

| Action              | Description                                      |
|---------------------|---------------------------------------------------|
| `addItem`           | Adds a plant to the cart, or increments quantity if it already exists |
| `removeItem`        | Removes a plant entirely from the cart             |
| `incrementQuantity` | Increases a specific item's quantity by 1          |
| `decrementQuantity` | Decreases a specific item's quantity by 1 (removes item if it hits 0) |
| `updateQuantity`    | Sets a specific item's quantity directly           |
| `clearCart`         | Empties the entire cart                            |

The store tracks `items`, `totalQuantity`, and `totalAmount`, all derived and updated automatically as actions are dispatched — components read this via `useSelector` and never manage cart math locally.

---

## 📌 Known Limitations / Future Work

- Checkout is a placeholder ("Coming Soon") — no payment or order flow yet
- No persistence — cart resets on page reload (could add `localStorage` or backend sync)
- No user authentication or order history
- Plant catalog is currently static (hardcoded array) — could be moved to an API/CMS

---

## 📄 License

This project is for educational purposes.