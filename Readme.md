# 🍔 Food Delivery E-Commerce Website

A full-stack food-delivery application with **User**, **Restaurant**, and **Admin**
roles. Users browse restaurants, add items to a cart, and pay for orders through
Stripe; restaurants manage their menus; admins track and update order status.

🔗 **Live demo:** https://frontend-swart-tau-69.vercel.app
📄 **License:** Apache-2.0

---

## ✨ Features

**User**
- Sign up / log in (JWT-authenticated)
- Browse restaurants, filter by city, and view a restaurant's menu
- Add items to a cart and place an order
- Pay securely via Stripe
- View past order history

**Restaurant**
- Register and log in as a restaurant
- Add and manage menu items

**Admin**
- Admin sign up / log in
- View pending orders across the platform
- Update the status of any order

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React, Vite, Stripe.js |
| **Backend** | Node.js, Express |
| **Database** | MongoDB (Mongoose) |
| **Auth** | JSON Web Tokens (JWT) |
| **Payments** | Stripe |
| **Hosting** | Vercel (frontend + backend) |

---

## 📁 Project Structure

```
Food_Delivery_E-Commerce_Website/
├── Backend/
│   ├── Functions/          # Route handlers grouped by role
│   │   ├── Admin/          # signup, login, pending orders, update status
│   │   ├── Restaurant/     # register, login, add menu item
│   │   └── User/           # signup, login, restaurants, orders, payment, history
│   ├── MiddleWare/         # authenticate.js (JWT verify), generatejwt.js
│   ├── Routes/             # index.js — all routes mounted under /foodapp
│   ├── db.js               # MongoDB connection + Mongoose schemas
│   ├── index.js            # Express app entry point
│   └── vercel.json
├── Frontend/
│   ├── src/
│   │   ├── Components/      # shared UI
│   │   ├── Pages/           # Home, Login, Signup, Cart, Dashboard, Admin, Restro...
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── vercel.json
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
└── LICENSE
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- A [MongoDB](https://www.mongodb.com/) database (local or Atlas)
- A [Stripe](https://stripe.com/) account (for a test API key)

### 1. Clone the repository
```bash
git clone https://github.com/KrishKPs/Food_Delivery_E-Commerce_Website.git
cd Food_Delivery_E-Commerce_Website
```

### 2. Set up the Backend
```bash
cd Backend
npm install        # if package.json is missing, install: express mongoose cors dotenv jsonwebtoken stripe
```

Create a `.env` file inside `Backend/`:
```env
MONGO_URL=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_jwt_secret
SECRET_KEY=your_stripe_secret_key
```

Start the server:
```bash
node index.js      # or: npx nodemon index.js
```
The API runs at `http://localhost:3000`, with routes under `/foodapp`.

### 3. Set up the Frontend
```bash
cd ../Frontend
npm install        # if package.json is missing, install: react react-dom @stripe/stripe-js (+ vite as a dev dependency)
npm run dev
```
Vite serves the app at `http://localhost:5173` by default.

> **Note:** update the API base URL in the frontend to point at your local
> backend (`http://localhost:3000/foodapp`) while developing.

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `MONGO_URL` | MongoDB connection string |
| `PORT` | Port the Express server listens on (defaults to `3000`) |
| `JWT_SECRET` | Secret used to sign and verify authentication tokens |
| `SECRET_KEY` | Stripe secret key used to process payments |

---

## 📡 API Overview

All endpoints are served under the `/foodapp` base path.

**User**
- `POST /signup` · `POST /login`
- `GET  /restaurants` · `POST /restaurantcity` *(auth required)*
- menu, single restaurant, create order, order history, payment

**Restaurant**
- `POST /restaurantregister` · `POST /loginrestro` · `POST /addmenu`

**Admin**
- `POST /admin/signup` · `POST /admin/login`
- `GET  /admin/pendingorders` · `POST /admin/updateorder`

Protected routes require a valid JWT in the `Authorization` header.

---

## ☁️ Deployment

Both apps deploy to **Vercel** via their `vercel.json` files. Configure the
backend environment variables in the Vercel dashboard, and point the frontend's
API base URL at your deployed backend.

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and the
[Code of Conduct](CODE_OF_CONDUCT.md) before opening a pull request.

## 📜 License

Distributed under the **Apache-2.0 License**. See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgements

Original project by [KrishKPs](https://github.com/KrishKPs).
