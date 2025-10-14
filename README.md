CS-465-Fullstack

CS-465 Full Stack Development with MEAN

Module 4: Database Integration
Overview

In this module, the Travlr Getaways web application was extended to include a MongoDB database connection. Using Mongoose, schemas and models were created to define the structure of trip data. This allows dynamic retrieval of trips from the database rather than using static files.

Steps Completed

1.Database Access Module

Installed Mongoose:

npm install mongoose --save


Created db.js to connect Express to MongoDB (mongodb://localhost:27017/travlr).

2.Trip Schema & Model

Defined trips.js in app_api/models with fields:

code (unique ID)

name

length

start (date)

resort

perPerson (cost)

image (URL/path)

description

3.Populate Database

Imported trips.json into MongoDB using:

mongoimport --db travlr --collection trips --file trips.json --jsonArray


Verified records (Bali Reef, Mountain Trip, etc.) exist in the collection.

4.API Integration

Created controller trips.js inside app_api/controllers.

Implemented logic to query trips from MongoDB and return results in JSON format.

Created Express route (/api/trips) to expose trip data to the frontend.

5.Testing

Confirmed connection with mongosh and verified data exists in the travlr.trips collection.

Ran the app with:

npm start


Validated JSON data returned at:

http://localhost:3000/api/trips

Technology Used

MongoDB (database)

Mongoose (object modeling)

Express.js (API layer)

Node.js (runtime)

Setup Instructions

To run the project locally:

1.Clone the repository.

2.Navigate into the project folder:

cd travlr


3.Install dependencies:

npm install


4.Start MongoDB server:

mongod --dbpath C:\data\db


5.Import sample data:

mongoimport --db travlr --collection trips --file trips.json --jsonArray


6.Start the application:

npm start


7.Open browser and visit:

http://localhost:3000/api/trips

Next Steps

Connect Angular SPA to consume the trips API.

Implement CRUD operations for administrators to manage trip data.

Eddy Kwon
CS-465 Full-Stack Development I 
Travlr Getaways Final Project week 6

Instructions to run:

1. Start MongoDB service (mongod).
2. Run backend:
   npm install
   npm start
3. Run Angular frontend:
   cd travlr-app
   npm install
   ng serve
4. Visit http://localhost:4200 to view the site.
5. Visit http://localhost:3000/api/trips to view API data.