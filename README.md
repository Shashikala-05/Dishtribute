# 🍽️ Dishtribute – Turning Excess into Access

<p align="center">
  <img src="screenshots/logo.png" alt="Dishtribute Logo" width="180"/>
</p>

<p align="center">
  <strong>A smart food donation platform connecting Donors, NGOs, Volunteers, and Admins to reduce food waste and feed people in need.</strong>
</p>

<p align="center">
  <a href="https://dishtribute.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit-success?style=for-the-badge" />
  </a>
  <a href="https://github.com/Shashikala-05/Dishtribute" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" />
  </a>
</p>

---

## 🌐 Live Demo

👉 https://dishtribute.vercel.app/

---

## 📌 Project Overview

Dishtribute is a web application designed to reduce food waste by connecting food donors with NGOs and orphanages through volunteers.

The platform allows:

- 🍱 Donors to donate surplus food
- 🏢 NGOs / Orphanages to accept or reject food donations
- 🚚 Volunteers to collect and deliver food
- 👨‍💼 Admins to monitor and manage the complete system

---

## ✨ Features

### 🍱 Donor

- Register & Login
- Add food donations
- Upload food image
- Select pickup location
- View donation history
- Track donation status

### 🏢 NGO / Orphanage

- Register organization
- View available donations
- Accept or reject requests
- Track accepted donations

### 🚚 Volunteer

- View NGO-approved requests
- Accept pickup tasks
- Mark food as Picked
- Mark delivery as Completed

### 👨‍💼 Admin

- Monitor users
- Manage donations
- View dashboard statistics
- Track delivery progress

---

## 🔄 Workflow

```text
Donor
   │
   ▼
Add Food Donation
   │
   ▼
Pending
   │
   ▼
NGO Reviews
   │
 ┌─┴───────────┐
 │             │
Accept      Reject
 │
 ▼
Volunteer Assigned
 │
 ▼
Food Pickup
 │
 ▼
Food Delivered
```

---

## 🛠️ Tech Stack

### Frontend

- React.js
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router

### Backend

- Supabase Authentication
- Supabase Database
- Supabase Storage

### Deployment

- Vercel

---

## 📂 Project Structure

```text
Dishtribute/
│
├── screenshots/
├── public/
├── src/
│   ├── components/
│   ├── contexts/
│   ├── pages/
│   ├── hooks/
│   ├── lib/
│   └── assets/
│
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/Shashikala-05/Dishtribute.git
```

Navigate into the project

```bash
cd Dishtribute
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Run locally

```bash
npm run dev
```

Build

```bash
npm run build
```

---

## 📸 Screenshots

### 🏠 Home Page

<img src="screenshots/Home Page.png" width="100%" alt="Home Page"/>

---

### 🔐 Login Page

<img src="screenshots/Login Page.png" width="100%" alt="Login Page"/>

---

### 🍱 Donor Dashboard

<img src="screenshots/Donor Dashboard.png" width="100%" alt="Donor Dashboard"/>

---

### 🏢 NGO Dashboard

<img src="screenshots/NGO Dashboard.png" width="100%" alt="NGO Dashboard"/>

---

### 🚚 Volunteer Dashboard

<img src="screenshots/Volunteer Dashboard.png" width="100%" alt="Volunteer Dashboard"/>

---

### 👨‍💼 Admin Dashboard

<img src="screenshots/Admin Dashboard.png" width="100%" alt="Admin Dashboard"/>

---

## 🔮 Future Enhancements

- Google Maps integration
- Live volunteer tracking
- AI-based NGO recommendation
- Push notifications
- QR Code verification
- Email notifications
- Food expiry prediction
- Mobile application

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---

## 📄 License

This project is developed for educational and portfolio purposes.
