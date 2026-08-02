# 🚀 BE-04 FlyRank - Task API with PostgreSQL & Docker

## 📌 Project Overview

This project is a RESTful Task API built using **Node.js** and **Express.js**.

The application was migrated from the previous storage implementation to **PostgreSQL running inside Docker**, while keeping the API routes and service behavior unchanged.

The project demonstrates Docker, PostgreSQL, environment variables, Docker Compose, and persistent storage using Docker Volumes.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Docker
- Docker Compose
- pg (PostgreSQL Driver)
- dotenv

---

## 📂 Project Structure

```
BE-04/
│── Dockerfile
│── docker-compose.yml
│── .env.example
│── .gitignore
│── init.sql
│── db.js
│── server.js
│── package.json
│── openapi.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/khushiekghara/BE-04-FlyRank.git
cd BE-04-FlyRank
```

---

### 2️⃣ Create Environment File

Create a `.env` file using `.env.example`

Example:

```env
PORT=3000
DATABASE_URL=postgres://postgres:password@db:5432/tasksdb
```

---

### 3️⃣ Run the Project

```bash
docker compose up --build
```

The application will start along with PostgreSQL.

---

## 🌐 API Endpoints

### Health Check

```
GET /health
```

Response

```json
{
  "status": "ok"
}
```

---

### Get All Tasks

```
GET /tasks
```

---

### Get Task by ID

```
GET /tasks/:id
```

---

### Create Task

```
POST /tasks
```

Body

```json
{
  "title": "Learn Docker"
}
```

---

### Update Task

```
PUT /tasks/:id
```

---

### Delete Task

```
DELETE /tasks/:id
```

---

## 🐳 Docker

The project uses Docker Compose to run:

- Node.js Application
- PostgreSQL Database

Start everything using:

```bash
docker compose up --build
```

Stop containers:

```bash
docker compose down
```

---

## 💾 Database Persistence

Docker Volumes are used to persist PostgreSQL data.

### Verification

1. Started the application using Docker Compose.
2. Created a task using the POST endpoint.
3. Stopped the containers.
4. Started the containers again.
5. Verified that the created task still existed in the database.

This confirms that the PostgreSQL volume preserves data across container restarts.

---

## 🏗️ Architecture

The API routes remained unchanged.

Only the storage layer was migrated to PostgreSQL.

This demonstrates clean architecture where changing the database implementation does not require changing the API layer.

---

## 📷 Testing

The API was tested using:

- Browser (GET endpoints)
- Postman (CRUD operations)

---

## 👩‍💻 Author

**Khushi Kumari**

GitHub:
https://github.com/khushiekghara

---

## ✅ Assignment Requirements Completed

- ✔ PostgreSQL running in Docker
- ✔ Docker Compose
- ✔ Docker Volume for persistent storage
- ✔ Environment variables using `.env`
- ✔ `.env.example` committed
- ✔ PostgreSQL repository replacing previous storage
- ✔ Service and routes kept unchanged
- ✔ Data persistence verified after container restart
