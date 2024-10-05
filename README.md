To-Do App
A full-stack CRUD (Create, Read, Update, Delete) To-Do application built using React, Ant Design, Node.js, Express.js, and MongoDB.

Features
Create Tasks: Add new tasks to your To-Do list.
Read Tasks: View your list of tasks in an organized manner.
Update Tasks: Edit task details and update their status.
Delete Tasks: Remove tasks when they are completed or no longer needed.
Responsive UI: Built with Ant Design for a modern and responsive user interface.
Backend API: Node.js and Express.js power the backend with a well-structured API.
Database: MongoDB is used for persistent data storage.
Tech Stack
Frontend:
React
Ant Design
Backend:
Node.js
Express.js
Database:
MongoDB
Installation
Prerequisites
Make sure you have Node.js and MongoDB installed on your system.

Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/todo-app.git
cd todo-app
Install Dependencies
Backend (Node.js + Express)
bash
Copy code
cd backend
npm install
Frontend (React + Ant Design)
bash
Copy code
cd ../frontend
npm install
Environment Variables
Create a .env file in the backend directory with the following variables:

makefile
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Run the Application
Start the MongoDB server:

bash
Copy code
mongod
Start the backend server:

bash
Copy code
cd backend
npm run dev
Start the frontend React application:

bash
Copy code
cd ../frontend
npm start
The application should now be running at http://localhost:3000 for the frontend, and the backend API will be at http://localhost:5000.

API Endpoints
GET /api/tasks: Fetch all tasks
POST /api/tasks: Create a new task
PUT /api/tasks/:id: Update a task by ID
DELETE /api/tasks/:id: Delete a task by ID
