# 🌐 My CV Website – Fullstack Project (Next.js + Express.js)

This is a fullstack personal portfolio project that showcases my resume, skills, experience, and projects. Built with modern web technologies including **Next.js**, **TypeScript**, and **Express.js**, the project is designed for performance, responsiveness, and real-world deployment using **Vercel** and **Render**.

> 🏁 Live site: [https://duyportfolio.com](https://duyportfolio.com)  
> 🧠 API endpoint: [https://api.duyportfolio.com/api/profile](https://api.duyportfolio.com/api/profile)

---

## 🛠️ Tech Stack

| Layer    | Stack                                  |
| -------- | -------------------------------------- |
| Frontend | Next.js, TypeScript, Styled-Components |
| Backend  | Express.js, Node.js, Nodemailer        |
| Email    | Nodemailer + Gmail App Password        |
| Hosting  | Vercel (frontend), Render (backend)    |
| Domain   | Custom `.com` domain integration       |

---

## 📁 Project Structure (Summary)

| Path                    | Description                                    |
| ----------------------- | ---------------------------------------------- |
| `backend/`              | Express.js backend server                      |
| ├── `src/controllers/`  | Logic for APIs (e.g. profile, skills, contact) |
| ├── `src/routes/`       | Route definitions for each API endpoint        |
| ├── `src/types/`        | TypeScript type declarations                   |
| ├── `src/utils/mail.ts` | Nodemailer transporter setup                   |
| ├── `src/app.ts`        | Express app configuration                      |
| ├── `src/server.ts`     | Server entry point                             |
| ├── `.env`              | Env vars (PORT, EMAIL_USER, EMAIL_PASS)        |
| └── `package.json`      | Backend dependencies and scripts               |

| `frontend/` | Next.js frontend (resume website) |
| ├── `pages/` | Page routes (Home, Resume, Contact, etc.) |
| ├── `components/` | Shared UI components (atoms, molecules, layout) |
| ├── `templates/` | Page content logic (e.g., Resume, Contact) |
| ├── `styles/` | Global styles and layout configs |
| ├── `public/` | Static assets (images, favicon, etc.) |
| ├── `lib/` | API handlers and shared types |
| ├── `meta/` | SEO and meta tag configuration |
| ├── `.env.local` | API base URL for frontend |
| └── `package.json` | Frontend dependencies and scripts |

| Root Files   |                                       |
| ------------ | ------------------------------------- |
| `README.md`  | Project overview and instructions     |
| `.gitignore` | Ignore node_modules, env, .next, etc. |

---

## 🚀 Features

- ✅ Responsive CV layout with sections: About Me, Skills, Resume, Projects, Contact
- ✅ Fetch data dynamically from backend API (profile, skills, activities, etc.)
- ✅ Send messages directly to email via contact form
- ✅ Connected with custom domain `duyportfolio.com`
- ✅ SEO optimized, deployed with HTTPS + SSL
- ✅ Used real production tools (Vercel, Render, GitHub, DNS)

---

## ⚙️ How to Use

### 📦 1. Clone the repo

```bash
git clone https://github.com/Duyha2000/portfolio.git
cd portfolio
```

🖥 2. Run Backend (Express API)
cd backend
npm install

# Create `.env` file with the following:

PORT=5000
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password

npm run dev

Email uses Gmail App Password. Enable 2FA and generate app-specific password via: https://myaccount.google.com/apppasswords

🌐 3. Run Frontend (Next.js)
cd frontend
npm install

# Create `.env.local` with the following:

NEXT_PUBLIC_API_URL=http://localhost:5000

npm run dev

🌍 Deployment Guide
🔵 Backend on Render
Create a new Web Service on https://render.com

Point it to backend/ folder in the repo

Set environment variables: PORT, EMAIL_USER, EMAIL_PASS

Deploy → Get domain like: https://portfolio-xxxxx.onrender.com

Add custom domain: api.duyportfolio.com

🟣 Frontend on Vercel
Go to https://vercel.com/new

Import GitHub repo

Set Root Directory to frontend

Set environment variable: NEXT_PUBLIC_API_URL=https://api.duyportfolio.com

Add custom domain: duyportfolio.com + www.duyportfolio.com

Done ✅

📧 Contact Form Setup
The form sends data to backend API:
POST https://api.duyportfolio.com/api/send-email

Payload format:
{
"name": "Your Name",
"email": "you@example.com",
"phone": "1234567890",
"message": "Hello!"
}
Backend uses Nodemailer to send emails to your Gmail inbox.
