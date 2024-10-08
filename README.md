# Epicure Robotics Admin Dashboard

This is a full-stack admin dashboard for managing machines, dispensers, and recipes in the Epicure Robotics system. The dashboard allows administrators to monitor machine statuses, manage dispenser and recipe data, and perform actions like adding, editing, and deleting.

## Table of Contents

- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)

## Project Structure

The project is divided into two main parts:

- **Frontend** (React + Vite with Chakra UI)
- **Backend** (Node.js + Express + MongoDB)

### Folder Structure

```plaintext
dashboard-project/
│
├── frontend/                 # React + Vite frontend
│   ├── public/               # Public folder for static assets
│   ├── src/                  # Source folder containing all React components and logic
│   │   ├── assets/           # Assets like images, logos, etc.
│   │   ├── components/       # Reusable UI components (Navbar, Footer, etc.)
│   │   ├── hooks/            # Custom hooks for authentication or data fetching
│   │   ├── pages/            # Pages for routing (Dashboard, MachineDetails, etc.)
│   │   └── App.jsx           # Main App component with routing logic
│   └── vite.config.js        # Vite configuration file
│
├── backend/                  # Express + MongoDB backend
│   ├── models/               # Mongoose models (Machine, Dispenser, Recipe, etc.)
│   ├── routes/               # API routes for CRUD operations
│   ├── controllers/          # Controllers handling API logic
│   └── server.js             # Entry point for the backend server
│
├── .gitignore                # Git ignore file (ignores node_modules, .env, etc.)
├── README.md                 # Project documentation
└── package.json              # Project dependencies and scripts
```

## Technologies Used

### Frontend

- **React** with **Vite** for a fast development environment
- **Chakra UI** for responsive and modern UI components
- **Axios** for making API requests
- **React Router** for page navigation
- **Vite** for rapid frontend builds and development server

### Backend

- **Node.js** with **Express** for creating the API
- **MongoDB** for the database
- **Mongoose** as an ODM for MongoDB
- **dotenv** for environment variables management
- **Cors** for cross-origin request handling
- **Nodemon** for automatic backend restarts on code changes

## Installation

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install backend dependencies:

   ```bash
   npm install express mongoose cors dotenv nodemon
   ```

3. Create a `.env` file in the `backend` folder and add the following environment variables:

   ```plaintext
   MONGO_URI=mongodb://localhost:27017/epicure
   PORT=5000
   ```

4. Run the backend server:

   ```bash
   node server.js
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion axios react-router-dom vite
   ```

3. Run the frontend development server:

   ```bash
   npm run dev
   ```
