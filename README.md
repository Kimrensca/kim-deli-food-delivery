
# KimDeli – Food Delivery Web App

**Live Demo:** [https://kimdeli.vercel.app](https://kimdeli.vercel.app)  
**Fast. Fresh. Friendly.** – Kenya’s modern food delivery experience.

---

## Features

- **32+ Menu Items** with real PNG images
- **Add to Cart** with live counter
- **Stripe Payment Integration**
- **Order Tracking** & Verification
- **Responsive Design** – Mobile & Desktop
- **Footer Links**: Home, About, Delivery, Privacy
- **Admin Panel** – Add, Edit, Delete foods
- **App Download Section** – Play Store & App Store badges

---

## Tech Stack

| Layer       | Technology                     |
|-----------|--------------------------------|
| Frontend  | React, Vite, React Router      |
| Backend   | Node.js, Express, MongoDB      |
| Styling   | CSS Modules (per component)    |
| Payments  | Stripe                         |
| Deployment| Vercel (Frontend), Render (Backend) |

---

## Project Structure

Food-Delivery-Web/
├── frontend/           ← React App (Vite)
│   ├── src/
│   │   ├── pages/      ← Home, About, Delivery, Privacy
│   │   ├── components/ ← Header, Footer, FoodItem, etc.
│   │   └── assets/     ← Images, icons
│   └── vercel.json
│
├── backend/            ← Node.js + Express
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md

---

## Live URLs

| Service     | URL |
|-----------|-----|
| **Frontend**  | [https://kimdeli.vercel.app](https://kimdeli.vercel.app) |
| **Backend API** | `https://food-delivery-backend-1.onrender.com` |

---

## Setup (Local Development)

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/kimdeli-food-delivery.git
cd kimdeli-food-delivery
```

### 2. Start Backend

```bash
cd backend
npm install
npm start
```

Server runs on: `http://localhost:4000`

### 3. Start Frontend

```bash
cd ../frontend
npm install
npm run dev
```

App runs on: `http://localhost:5173`

---

## Environment Variables

### `backend/.env`

```env
PORT=4000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/food-del
STRIPE_SECRET_KEY=sk_test_...
```

### `frontend/.env`

```env
VITE_API_URL=http://localhost:4000
```

---

## Deployment

### Frontend → Vercel

```bash
cd frontend
vercel --prod
```

### Backend → Render

- Connect GitHub repo
- Set `start` command: `node server.js`
- Add environment variables

---

## Screenshots

![Menu](frontend/src/assets/screenshots/menu.png)  
![Cart](frontend/src/assets/screenshots/cart.png)  
![Mobile View](frontend/src/assets/screenshots/mobile.png)

---

## Future Plans

- [ ] User Reviews & Ratings
- [ ] Live Order Tracking Map
- [ ] Promo Codes & Discounts
- [ ] Driver App (React Native)

---

## Author

**Your Name**  
Kenyan Full-Stack Developer  
[GitHub](https://github.com/yourusername) | [LinkedIn](https://linkedin.com/in/yourprofile)

---

> **KimDeli – Delivering Happiness, One Meal at a Time**  
> *Built with love in Kenya*  
