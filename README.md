# CS-465 Fullstack – Travlr Getaways

This project is part of the **CS-465 Full Stack Development with MEAN** course at Southern New Hampshire University (SNHU).  
The goal is to build a travel website using **Node.js, Express, and Handlebars**, rendering dynamic content from a JSON file.

Author

Eddy Kwon
Southern New Hampshire University – CS-465

---

## 📂 Project Structure
ravlr/
├── app.js # Main server file (Express setup)
├── package.json # Project dependencies
├── app_server/ # Controllers, routes, and views
│ ├── controllers/ # Logic for handling data
│ ├── routes/ # Route definitions
│ └── views/ # Handlebars templates
│ └── partials/ # Header, footer, etc.
├── public/ # Static files (CSS, images, etc.)
├── trips.json # Travel packages data
└── README.md # Project documentation

---

## How to Run
1. Install dependencies:
   ```bash
   npm install

Start the application:
npm start

Open in your browser:
http://localhost:3000

Available Pages

/ → Home page

/travel → Travel packages (loaded from trips.json)

/rooms, /meals, /news → Navigation links (placeholders for now)

Example Data (trips.json)
[
  {
    "title": "Bali Retreat",
    "description": "Relax in a tropical paradise with luxury resorts.",
    "price": 1200,
    "image": "bali.jpg"
  }
]


