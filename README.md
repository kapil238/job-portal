# Job Portal

A **Job Portal** web application built using **Vite + React** for the frontend and **Node.js + Express.js + JWT** for the backend.

## Features

### Frontend:
- **Built with:** Vite + ReactJS
- **UI Frameworks:** Material-UI, ShadCN/UI, Tailwind CSS
- **State Management:** Redux Toolkit with Redux Persist
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Carousel:** Embla Carousel (preferred over Slick Carousel)
- **Dark Mode Support:** Next-Themes
- **API Requests:** Axios

### Backend:
- **Built with:** Node.js + Express.js
- **Authentication:** JWT (JSON Web Tokens)
- **Database:** MongoDB with Mongoose
- **File Uploads:** Multer & Cloudinary
- **Security:** bcrypt.js for password hashing
- **Middleware:** Cookie-Parser & CORS

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (Latest LTS)
- **MongoDB** (Local or Cloud-based)
- **Vite** (for the frontend)

### Clone the Repository
```sh
git clone https://github.com/your-repo/job-portal.git
cd job-portal


Frontend Setup

cd frontend
npm install
npm run dev


Backend Setup

cd backend
npm install
npm run dev


Environment Variables
Create a .env file in the backend directory with the following:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

Usage
Open http://localhost:5173/ for the frontend.
The backend runs on http://localhost:5000/.

License
This project is licensed under the MIT License.

Let me know if you want any modifications! 🚀
