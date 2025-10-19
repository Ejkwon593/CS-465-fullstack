# Travlr Getaways – Full Stack Web Application  
**Author:** Eddy Kwon  
**Course:** CS-465 – Full Stack Development I  
**Date:** October 15, 2025  
**Version:** 1.2 (Final Submission)

---

##  Overview
This project is a **full stack web application** built for the fictional travel agency **Travlr Getaways**. It demonstrates integration of the **MEAN stack** (MongoDB, Express, Angular, and Node.js) to create both a **customer-facing website** and an **administrator single-page application (SPA)**.

The goal of the project was to develop a functional web system where users can view travel packages, and administrators can manage trip information through API interactions with a NoSQL database.

---

##  Technologies Used
- **MongoDB** – NoSQL database for storing travel packages  
- **Express.js** – Web framework for handling routing and API endpoints  
- **Angular** – Front-end SPA framework for dynamic data display  
- **Node.js** – Server runtime for backend operations  
- **Handlebars (HBS)** – Template engine for rendering dynamic customer-facing pages  
- **Bootstrap** – CSS framework for responsive design  
- **CORS** – Middleware to allow cross-origin requests between front and back end  

---

## Project Structure

travlr/
│
├── app_api/ # API logic (routes, controllers, models)
│ └── routes/trips.js
│
├── app_server/ # Express MVC structure for customer website
│ ├── routes/
│ ├── controllers/
│ └── views/
│
├── travlr-app/ # Angular project for SPA admin dashboard
│ ├── src/app/
│ │ ├── trip-list/
│ │ ├── trip-card/
│ │ └── trip-data.service.ts
│
├── public/ # Static files
├── package.json # Node dependencies
├── app.js # Main Express server file
├── trips.json # Sample data for seeding the database
└── README.md # Project documentation (this file)


---

## How to Run the Application

### **1. Start MongoDB**
Make sure MongoDB is running locally on your computer:
```bash
mongod

Start the Express Server

In the root directory (travlr):

npm start


This will start the backend on http://localhost:3000

3. Start the Angular App

In the Angular directory (travlr-app):

ng serve


This will start the front end on http://localhost:4200

 Application Features
Customer-Facing Website

Built with Express.js and Handlebars (HBS)

Displays available travel destinations with descriptions and prices

Dynamically renders content from MongoDB through the RESTful API

Administrator SPA (Angular)

Built with Angular components for modular UI

Displays available trips retrieved from the API using HttpClient

Uses a TripDataService to connect Angular with the backend

Architecture supports adding PUT and POST routes for future editing and creation of trips

 Testing and Troubleshooting

CORS Issue: Solved by installing and enabling the cors package in app.js

API Connectivity: Tested GET endpoints via both the browser and Angular service

Server Logs: Confirm backend and frontend both run concurrently (npm start + ng serve)

 Future Enhancements

Implement full CRUD features (Add, Edit, Delete trip) via Angular

Add authentication and admin login using JWT (JSON Web Tokens)

Integrate search and filtering for trips

Deploy to a live domain with MongoDB Atlas and Vercel/Render