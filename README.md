# 🚗 AutoMarket

Fullstack автомобільний маркетплейс.

Користувачі можуть переглядати авто, шукати, фільтрувати, додавати в обране, авторизуватись та створювати власні оголошення.

## 🛠 Tech Stack

### Frontend

- React
- TypeScript
- Vite
- React Router DOM
- Axios
- Leaflet (Maps)

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

### Deploy

- Frontend: Vercel
- Backend: Render
- Images: Cloudinary

---

## ✨ Features

### User Features

- 🔍 Search cars
- 🎯 Filters
- 📄 Single car page
- ❤️ Favorites
- 👤 Authentication
- 📝 Create/Edit/Delete own cars
- 📍 Car map location
- 📦 Pagination
- 🔒 Protected pages

### Admin Features

- 👥 Users management
- 🚗 Cars management
- ❌ Delete cars
- 🔨 Ban users

---

## 📁 Project Structure

### Frontend

```txt
src/
│
├── pages/
├── components/
├── layouts/
├── hooks/
├── services/
├── types/
├── data/
├── styles/
├── utils/
├── router/
│
├── App.tsx
└── main.tsx
```

### Backend

```txt
backend/
│
└── src/
    ├── controllers/
    ├── routes/
    ├── middleware/
    ├── services/
    ├── models/
    ├── types/
    ├── config/
    └── utils/
```

---

## 🚀 Getting Started

### Clone repository

```bash
git clone <your-repository-url>
```

### Frontend Setup

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

## 📌 Routes

```txt
/
/cars
/cars/:id
/profile
/login
/register
/dashboard
/admin
```

---

## 🔐 Authentication

Authentication is implemented using:

- JWT Token
- Protected Routes
- Role-based access

Roles:

```txt
user
admin
```

---

## 📦 API Features

### Cars

```http
GET /cars
GET /cars/:id
POST /cars
PATCH /cars/:id
DELETE /cars/:id
```

### Auth

```http
POST /register
POST /login
GET /me
```

### Favorites

```http
POST /favorites
GET /my-favorites
```

### Admin

```http
GET /users
DELETE /delete-car/:id
PATCH /ban-user/:id
```

---

## 🎯 Learning Goals

This project was built to practice:

- React Architecture
- TypeScript
- React Router
- State Management
- CRUD Operations
- JWT Authentication
- MongoDB + Mongoose
- Express.js
- REST API
- Fullstack Development

---

## 📸 Screenshots

Coming soon...

---

## 👨‍💻 Author

Roman Okhremov

Junior Frontend / Future Fullstack Developer
