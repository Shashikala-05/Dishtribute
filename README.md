# 🍽️ Dishtribute – Turning Excess into Access

<p align="center">
  <img src="screenshots/logo.png" alt="Dishtribute Logo" width="170"/>
</p>

<p align="center">
  <b>A Food Donation Platform connecting Donors, NGOs, Volunteers, and Admins to reduce food waste and help communities in need.</b>
</p>

<p align="center">
  <a href="https://dishtribute.vercel.app/">
    <img src="https://img.shields.io/badge/🌐 Live Demo-Visit-success?style=for-the-badge">
  </a>
  <a href="https://github.com/Shashikala-05/Dishtribute">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github">
  </a>
</p>
---

## 📖 About

Dishtribute is a web-based food donation platform that helps reduce food waste by connecting food donors with NGOs and orphanages through volunteers.

The platform ensures surplus food reaches people in need efficiently and safely.

---

## ✨ Key Features

### 🍱 Donor
- Register & Login
- Donate surplus food
- Upload food details
- Track donation status

### 🏢 NGO / Orphanage
- View available donations
- Accept or reject food
- Track accepted requests

### 🚚 Volunteer
- Accept pickup requests
- Deliver food
- Update delivery status

### 👨‍💼 Admin
- Manage users
- Monitor donations
- View overall platform activity

---

## 🔄 Workflow

```text
Donor
   │
   ▼
Add Food Donation
   │
   ▼
NGO Accepts Request
   │
   ▼
Volunteer Picks Up Food
   │
   ▼
Food Delivered
```

---

## 🛠 Tech Stack

| Frontend | Backend | Database | Deployment |
|-----------|----------|-----------|------------|
| React.js | Supabase | PostgreSQL | Vercel |
| TypeScript | Supabase Auth | Supabase Storage | GitHub |
| Vite | | | |

---

## 📸 Screenshots

### Authentication

<p align="center">
<img src="screenshots/Login Page.png" width="46%">
&nbsp;&nbsp;
<img src="screenshots/Signup Page.png" width="46%">
</p>

<p align="center">
<b>Login</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<b>Signup</b>
</p>

---

### User Dashboards

<p align="center">
<img src="screenshots/Donor Dashboard.png" width="46%">
&nbsp;&nbsp;
<img src="screenshots/NGO Dashboard.png" width="46%">
</p>

<p align="center">
<b>Donor Dashboard</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<b>NGO Dashboard</b>
</p>

<br>

<p align="center">
<img src="screenshots/Volunteer Dashboard.png" width="46%">
</p>

<p align="center">
<b>Volunteer Dashboard</b>
</p>

---

## 🚀 Installation

```bash
git clone https://github.com/Shashikala-05/Dishtribute.git
```

```bash
cd Dishtribute
```

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

## 🔮 Future Enhancements

- 📍 Google Maps Integration
- 🔔 Real-time Notifications
- 🤖 AI-based Food Recommendation
- 📱 Progressive Web App (PWA)
- 📊 Analytics Dashboard

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is developed for educational and portfolio purposes.
