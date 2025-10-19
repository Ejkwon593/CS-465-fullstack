# Travlr Getaways – Full Stack Web Application  
**Author:** Eddy Kwon  
**Course:** CS-465 – Full Stack Development I  
**Date:** October 15, 2025  
**Version:** 1.2 (Final Submission)

---

Overview

This project is part of the CS-465 Full Stack Development course at Southern New Hampshire University.
The Travlr Getaways application is a full-stack web project that connects a RESTful API backend with a dynamic front-end interface.
In this module, authentication functionality was implemented using Node.js, Express, MongoDB, Passport, and JSON Web Tokens (JWT).

Features Implemented

User Registration (POST /api/auth/register)
Allows new users to create an account by submitting their name, email, and password.
The password is hashed and securely stored in MongoDB.

User Login (POST /api/auth/login)
Authenticates registered users based on their email and password.
If valid, it returns a signed JWT token for secure access to protected endpoints.

Protected Routes
JWT authentication ensures that only logged-in users with valid tokens can access certain API routes.

API Testing with Postman
All endpoints were tested using Postman.
The registration and login requests successfully returned valid JSON responses and authentication tokens.

Technologies Used

Backend Framework: Node.js with Express

Database: MongoDB (Mongoose ODM)

Authentication: Passport.js (Local Strategy) and JWT

Environment Management: dotenv

Testing Tool: Postman

Version Control: Git and GitHub

API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Registers a new user
POST	/api/auth/login	Logs in an existing user
GET	/api/trips	Retrieves available trips (can be secured with JWT)
Example Responses

Successful Registration

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}


Successful Login

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}


Invalid Credentials

{
  "message": "Invalid credentials"
}

Project Structure
travlr/
│
├── app_api/
│   ├── config/
│   │   └── passport.js
│   ├── controllers/
│   │   ├── authentication.js
│   │   └── trips.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── verifyToken.js
│   ├── models/
│   │   ├── user.js
│   │   └── trips.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── trips.js
│   └── db.js
│
├── app_server/
│   ├── controllers/
│   ├── routes/
│   └── views/
│
├── public/
│   ├── css/
│   ├── images/
│   └── html files
│
├── .env
├── package.json
├── app.js
└── README.md

Testing Instructions

Run the MongoDB server locally or connect to your cloud database.

Open a terminal and start the API:

npm start


Use Postman to test the endpoints:

POST http://localhost:3000/api/auth/register

POST http://localhost:3000/api/auth/login

Copy the JWT token returned and use it for accessing protected routes if required.

Current Branch

The project for this submission is located on the module7 branch.
GitHub repository:
https://github.com/Ejkwon593/CS-465-fullstack/tree/module7

Instructor Notes

The API has been fully tested and verified using Postman.
Registration and login endpoints return valid JSON Web Tokens, confirming successful authentication.
The API server runs locally on port 3000, and CORS has been configured to allow communication with the Angular front-end running on port 4200.
