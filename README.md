# 🚀 SNIPE Blockchain – Frontend Technical Assessment

A responsive React.js dashboard for shipment tracking with authentication, data table, dynamic routing, and TailwindCSS UI.  
This project is built exactly according to the technical requirements in the assessment.

---

## 📌 Live Demo
🔗 (https://snipe-frontend-project.vercel.app/)

---

## 🛠️ Tech Stack
- **React.js (Create React App)**
- **React Router**
- **TailwindCSS**
- **Axios**
- **Local Mock API (JSON file)**

---

## 📦 Features

### ✅ **1. Authentication (No Backend)**
- Simple login page  
- Accepts any credentials  
- Redirects to Dashboard  

### ✅ **2. Dashboard**
- Summary Cards:  
  - Total Shipments  
  - In Transit  
  - Delivered  
  - Delayed  
- Fully searchable shipments table  
- Sortable columns  
- Pagination-ready structure  

### ✅ **3. Shipment Details Page**
- Dynamic routing using React Router  
- Shipment timeline (Ordered → Delivered)  
- Product image  
- Last 5 log events  
- Status badge  
- ETA display  

### ✅ **4. Mock API**
- Data loaded from:  
  `public/api/shipments.json`
- Includes:
  - Loading state  
  - Error state  
  - Clean API fetch flow  

### ✅ **5. UI/UX**
- Fully responsive  
- TailwindCSS  
- Component-based architecture  
- Clean folder structure  

---

## 📁 Project Directory Structure

```bash
snipe-frontend/
│
├── public/
│   └── api/
│       └── shipments.json
│
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Loader.jsx
│   │   ├── StatusBadge.jsx
│   │   └── Timeline.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   └── ShipmentDetails.jsx
│   │
│   ├── utils/
│   │   └── fetcher.js
│   │
│   ├── App.jsx
│   ├── index.js
│   └── index.css
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
