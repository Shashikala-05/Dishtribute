# 🍽️ Dishtribute – Turning Excess into Access

Dishtribute is a food donation platform that connects **food donors, NGOs/orphanages, volunteers, and administrators** to reduce food waste and help people in need.

The platform allows donors to donate surplus food, NGOs to accept food requests, volunteers to collect and deliver donations, and administrators to monitor the complete system.

---

## 📌 Features

### 👤 Donor
- Register and login
- Donate surplus food
- Upload food image
- Add quantity and pickup time
- Select donation location
- Track donation status
- View donation history

### 🏢 NGO / Orphanage
- Register organization
- View available food donations
- Accept or reject donation requests
- View accepted requests
- Track deliveries

### 🚚 Volunteer
- Register and login
- View NGO-approved pickup requests
- Accept pickup
- Update delivery status
- View assigned deliveries

### 👨‍💼 Admin
- Manage users
- Monitor all donations
- Track deliveries
- View dashboard statistics

---

## 🔄 Workflow

```text
Donor
   │
   ▼
Adds Food Donation
   │
   ▼
Status: Pending
   │
   ▼
NGO Reviews Request
   │
 ┌─┴────────────┐
 │              │
Accept       Reject
 │              │
 ▼              ▼
Volunteer     Donation
Gets Request  Remains Available
 │
 ▼
Picks Food
 │
 ▼
Delivers to NGO
 │
 ▼
Status: Delivered
```

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

### Backend
- Firebase Authentication
- Firebase Firestore
- Firebase Hosting

### Other
- React Router
- Lucide Icons

---

## 📂 Project Structure

```
Dishtribute/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── contexts/
│   ├── services/
│   └── assets/
│
├── firebase.json
├── package.json
└── README.md
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Dishtribute.git
```

Navigate to the project

```bash
cd Dishtribute
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Build project

```bash
npm run build
```

---

## 🔥 Firebase Setup

1. Create a Firebase project.
2. Enable Authentication (Email/Password).
3. Enable Firestore Database.
4. Add your Firebase configuration.
5. Deploy using Firebase Hosting.

Deploy

```bash
firebase deploy
```

---

## 📱 Future Enhancements

- Google Maps integration
- Live GPS tracking
- Push notifications
- AI-based NGO recommendation
- Food expiry prediction
- QR code verification
- Multi-language support
- Mobile application

---


