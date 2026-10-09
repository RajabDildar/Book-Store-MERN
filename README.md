# Book Store MERN

A full-stack bookstore application built with MongoDB, Express, React, and Node.js. Users can browse, add, edit, and delete books in a clean interface.

## Overview

This project demonstrates a simple MERN stack workflow:
- the frontend provides a React interface for managing a book catalog
- the backend exposes REST endpoints for CRUD operations
- MongoDB stores the book records
- the app is configured for local development with Vite and Express

## Features

- View all books in a responsive table
- Add a new book
- View individual book details
- Edit an existing book
- Delete a book
- REST API with backend validation

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- HTTP client: Axios
- Routing: React Router DOM

## Project Structure

```text
Book-Store-MERN/
├── backend/
│   ├── controllers/
│   │   └── bookController.js
│   ├── models/
│   │   └── bookModel.js
│   ├── routes/
│   │   └── booksRouter.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── .gitignore
└── README.md
```

## Backend API

The Express server runs on port `3000` and exposes the following routes:

```text
GET    /books
POST   /books
GET    /books/:id
PUT    /books/:id
DELETE /books/:id
```

The backend reads and writes to MongoDB at:

```text
mongodb://127.0.0.1:27017/books-collection
```

## Frontend Routes

```text
/                  Home page listing all books
/books/create      Create a new book
/books/details/:id View a book
/books/edit/:id    Edit a book
/books/delete/:id  Delete a book
```

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB running locally
- npm or yarn

### 1) Clone the repo

```bash
git clone https://github.com/RajabDildar/Book-Store-MERN.git
cd Book-Store-MERN
```

### 2) Start the backend

```bash
cd backend
npm install
npm run dev
```

The server will start on `http://localhost:3000`.

### 3) Start the frontend

Open a new terminal and run:

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Notes

- CORS is configured to allow requests from the frontend on `http://localhost:5173`.
- The app uses a local MongoDB instance for development.
- The project is a straightforward CRUD application intended for learning and portfolio use.

## License

This project is provided as-is for learning and demonstration purposes.
