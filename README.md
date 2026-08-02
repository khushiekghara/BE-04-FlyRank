# BE-04 FlyRank

## Task API using PostgreSQL and Docker

This project is a Task Management REST API built with **Node.js**, **Express.js**, **PostgreSQL**, and **Docker**.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Docker
- Docker Compose
- pg
- dotenv

## Setup

Clone the repository:

```bash
git clone https://github.com/khushiekghara/BE-04-FlyRank.git
cd BE-04-FlyRank
```

Create a `.env` file:

```env
PORT=3000
DATABASE_URL=postgres://postgres:password@db:5432/tasksdb
```

Run the project:

```bash
docker compose up --build
```

## API Endpoints

| Method | Endpoint |
|--------|----------|
| GET | /health |
| GET | /tasks |
| GET | /tasks/:id |
| POST | /tasks |
| PUT | /tasks/:id |
| DELETE | /tasks/:id |

## Features

- CRUD Operations
- PostgreSQL Database
- Docker Support
- Docker Compose
- Environment Variables
- Persistent Storage using Docker Volume

## Author

Khushi Kumari
