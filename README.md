# GlobleBites Server Backend

This repository contains the backend server for the GlobleBites application, built with **Node.js**, **Express**, and **MongoDB**. The server primarily handles user authentication and management.

---

## 🚀 Features

- **User Authentication:** Secure registration and login endpoints.
- **Password Security:** Passwords are hashed using `bcryptjs`.
- **JWT Authorization:** Uses `jsonwebtoken` for stateless authentication.
- **Database:** MongoDB managed through Mongoose.
- **CORS:** Configured to allow requests from specific origins (e.g., `http://localhost:3000`).
- **User Model:** Includes `name`, `email`, `profilePhotoUrl`, `about`, `location`, and default `role: "user"`.

---

## 🛠️ Technologies Used

| Purpose | Technology |
|--------|------------|
| Runtime | Node.js |
| Framework | Express |
| Database | MongoDB + Mongoose |
| Authentication | `jsonwebtoken`, `bcryptjs` |
| Utilities | `cors`, `dotenv`, `multer`, `nodemailer` |
| Development | `nodemon` |

---

## ⚙️ Installation & Setup

### **Prerequisites**
- Node.js (LTS recommended)
- MongoDB (local or remote)

---

## 📥 Steps

### **1. Install dependencies**
```bash
yarn install
# or
npm install
```

### **2. Create a `.env` file**
Create a `.env` file in the project root:

```env
# --- Database Configuration ---
# MongoDB connection URI 
MONGODB_URI=mongodb://localhost:27017/project

# --- JWT Configuration ---
# Secret key for signing JWTs
JWT_SECRET=your_strong_jwt_secret_key_here
```

> **Note:**  
> `src/middleware/auth.js` and `src/controller/auth.js` both use `process.env.JWT_SECRET`.

---

## ▶️ Running the Server

### **Development Mode**
```bash
yarn dev
# or
npm run dev
```
Runs:
```
nodemon src/server.js
```

### **Production Mode**
```bash
yarn start
# or
npm start
```
Runs:
```
node src/server.js
```

(Default port: **5000**)

---

## 📡 API Endpoints

All authentication routes are prefixed with:

```
/api/auth
```

### **Authentication Endpoints**

| Method | Endpoint | Description | Body Fields |
|--------|----------|-------------|-------------|
| **POST** | `/api/auth/register` | Registers a new user | `name`, `email`, `password` (required); `profilePhotoUrl`, `about`, `location` (optional) |
| **POST** | `/api/auth/login` | Authenticates a user and returns a JWT | `email`, `password` |

---

### **Protected Route**
| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/protected` | Example of a protected route |

### **Authentication Header**
```
x-auth-token: <your_jwt_token_here>
```

The authentication middleware validates the token and attaches the decoded user to `req.user`.

---

## ✔️ All Set!
You now have the complete backend documentation in one markdown block.

