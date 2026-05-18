# BookLeaf Author Support Portal

## Overview

BookLeaf is a full-stack MERN application designed for authors to manage books and raise support tickets through a clean and user-friendly dashboard interface.

The project includes authentication, book management, ticket management, and responsive dashboard workflows.

---

# Tech Stack

## Frontend

* React.js
* Vite
* Bootstrap
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication

---

# Features

## Author Portal

* User Registration & Login
* Secure JWT Authentication
* Author Dashboard
* Add New Books
* View Books
* Raise Support Tickets
* Track Ticket Status

## Admin Workflow

* Ticket Monitoring Structure
* Book Management Structure
* Modular Backend Architecture

---

# Project Architecture

The project follows a modular MERN stack architecture:

* React frontend for UI
* Express.js REST APIs
* MongoDB Atlas cloud database
* JWT authentication for protected routes
* Organized backend using:

  * Routes
  * Controllers
  * Models
  * Middleware

This structure improves scalability and maintainability.

---

# API Endpoints

## Authentication

POST /api/auth/register
POST /api/auth/login

## Books

GET /api/books
POST /api/books

## Tickets

GET /api/tickets/my
POST /api/tickets

---

# Setup Instructions

## Clone Repository

git clone YOUR_GITHUB_REPOSITORY

---

# Frontend Setup

cd frontend

npm install

npm run dev

---

# Backend Setup

cd backend

npm install

npm run dev

---

# Environment Variables

Create a `.env` file inside the backend folder.

PORT=5000

MONGO_URI=mongodb://swatik:Aabc123@ac-c5cyeee-shard-00-00.4qneyx0.mongodb.net:27017,ac-c5cyeee-shard-00-01.4qneyx0.mongodb.net:27017,ac-c5cyeee-shard-00-02.4qneyx0.mongodb.net:27017/bookleaf?ssl=true&replicaSet=atlas-jfvzkh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET=supersecret

OPENAI_API_KEY=your_key

---

# Database

The project uses MongoDB Atlas as the cloud database solution.

Collections:

* authors
* books
* tickets

---

# Live Demo

Frontend URL:
YOUR_VERCEL_URL  https://bookleaffrontend.vercel.app/

Backend URL:
https://project-rouge-gamma-43.vercel.app/




# Known Limitations

* No real-time notifications
* Limited admin analytics
* File uploads not implemented
* Advanced filtering not added yet

---

# Future Improvements

* Role-based access control
* Real-time ticket updates
* Better analytics dashboard
* File upload support
* Improved ticket filtering
* Dockerized deployment

---

# Deployment

## Frontend

* Vercel

## Backend

* Vercel

## Database

* MongoDB Atlas



# Conclusion

This project demonstrates a scalable MERN stack architecture with authentication, CRUD operations, cloud database integration, REST APIs, and deployment workflows.
