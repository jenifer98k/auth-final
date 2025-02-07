🚀 MERN Authentication Project

📌 Overview
This is a MERN (MongoDB, Express, React, Node.js) Authentication System with user login, registration, JWT authentication, cookie-based session handling, and email verification.

🏗 Project Structure

MERN_AUTHENTICATION/
│
├── client/                         # React client-side application
│   ├── public/                     # Static assets for React (index.html, favicon, etc.)
│   ├── src/                         # Main React source code
│   │   ├── components/              # Reusable UI components (forms, buttons, etc.)
│   │   ├── context/                 # React Context API for global state management
│   │   └── App.js                   # Root component that manages routing
│   └── package.json                 # Dependencies & scripts for the frontend
│
├── server/                         # Node.js backend
│   ├── controllers/                # Handles the logic for API requests
│   │   └── authController.js        # Authentication logic (register, login, logout)
│   ├── models/                     # Database models (MongoDB schemas)
│   │   └── userModel.js             # User model (schema)
│   ├── routes/                      # API routes for authentication
│   │   └── authRoutes.js            # Defines authentication endpoints
│   ├── middleware/                  # Middleware for authentication, logging, etc.
│   │   └── userAuth.js              # Middleware for protecting routes using JWT
│   ├── config/                      # Configuration files
│   │   ├── mongodb.js               # MongoDB connection setup
│   │   ├── nodemailer.js            # Nodemailer setup for sending emails
│   ├── server.js                    # Main entry point for the backend
│   ├── package.json                 # Dependencies & scripts for the backend
│   ├── .env                         # Environment variables (JWT secret, DB URI, etc.)
│   ├── package-lock.json            # Dependency lock file
│   └── note.md                      # Additional notes on the project
│
├── node_modules/                    # Installed dependencies
└── README.md                        # Documentation file (this file)


# 🔧 Technologies Used
# ✅ Backend (Node.js & Express) - `Install packages`
- Express.js - Web framework for handling API requests.
- Mongoose - Object Data Modeling (ODM) for MongoDB.
- jsonwebtoken (JWT) - Secure authentication using tokens.
- bcryptjs - Password hashing for secure storage.
- nodemailer - Email service for sending verification emails.
- cookie-parser - Parses cookies for session handling.
- dotenv - Manages environment variables.


# ✅ Frontend (React)
React.js - Frontend UI framework.
React Context API - Manages global authentication state.

# ✅ Database (MongoDB)
MongoDB Atlas - Cloud-based NoSQL database.
Mongoose - Connects and interacts with MongoDB.


# 🔥 Key Features
✔️ User Authentication: Register/Login users securely.
✔️ JWT Authentication: Protects private routes with tokens.
✔️ Password Hashing: Encrypts passwords using bcryptjs.
✔️ Cookie-Based Authentication: Stores tokens in HTTP-only cookies.
✔️ Email Verification: Sends an OTP via Nodemailer for account verification.
✔️ Protected Routes: Only logged-in users can access certain pages.

🛠 Installation & Setup

1️⃣ Backend Setup
cd server
npm install

📌 API Endpoints
## API Endpoints

### Authentication

# Endpoint             
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);




### User

authRouter.post('/send-verify-otp', userAuth , sendVerifyOTP);
authRouter.post('/verify-account', userAuth , VerifyEmail);



# 🚀 How JWT Authentication Works
User logs in → Server verifies credentials.
JWT Token generated → Sent in HTTP-only cookies.
Frontend stores session → Uses the token for authenticated requests.
Middleware (userAuth.js) → Protects routes by verifying tokens.

# package.json 
  "type": "module", // support import and export 

# 🍪 What are Cookies in Web Development?
Cookies are small pieces of data stored on a user's browser. They are sent between the client (browser) and the server to maintain user sessions, authentication, and preferences.

🛠 Why Do We Use Cookies?
Cookies are used to store user-related data between different requests. Some common use cases include:

1️⃣ Authentication (JWT in Cookies)
Stores authentication tokens (JWT) so users remain logged in.
Example: When you log in, a token is saved in a cookie and sent with every request to authenticate the user.

2️⃣ Session Management
Keeps users logged in across page reloads.
Example: If a user refreshes a website, they don’t need to log in again because their session is stored in a cookie.

3️⃣ User Preferences
Stores settings like language, dark mode, and theme preferences.
Example: Websites remember your theme selection even after closing the browser.

4️⃣ Tracking and Analytics
Helps track user behavior for analytics and personalized ads.
Example: Google Analytics uses cookies to track website visitors.

🔑 How Do Cookies Work in a Web App?
1️⃣ Client (Browser) Requests a Login → Sends username & password.
2️⃣ Server Generates a JWT Token → Stores it in a cookie.
3️⃣ Client Stores Cookie → Browser automatically sends it with future requests.
4️⃣ Server Reads the Cookie → Verifies the token to authenticate the user. 




# authController.js 
✅ User registration with password hashing and token generation
✅ Login/logout functionality with JWT-based authentication
✅ Email verification using OTP


# RUNN APP 
- npm run server