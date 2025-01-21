# Authentication and Authorization API

## Overview
This is a simple Node.js application for user authentication and authorization. It uses **JWT** for secure authentication, **MongoDB** for data storage, and follows the **MVC pattern** for scalability.

---

## Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT)
- Postman for API testing

---

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas account or a local MongoDB setup

### Installation Steps
1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following variables:
   ```plaintext
MONGO_URI=mongodb+srv://vimalcsofficial:%23Include%40123@vichuu.2jlml.mongodb.net/authentication-authorization?retryWrites=true&w=majority
JWT_SECRET=ebca20e6-5e1e-42be-8303-5e260a96119f
PORT=5002

   ```
4. Start the server:
   ```bash
   node server.js
   ```
5. The server will run at `http://localhost:<PORT>` (default: `5002`).

---

## API Endpoints

### 1. **User Registration**
**Endpoint:** `POST /api/auth/register`

- **Description:** Registers a new user.
- **Request Headers:**
  - `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "username": "testuser",
    "email": "vimalan0223@gmail.com",
    "password": "12345678"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```

---

### 2. **User Login**
**Endpoint:** `POST /api/auth/login`

- **Description:** Logs in a user and returns a JWT.
- **Request Headers:**
  - `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "email": "vimalan0223@gmail.com",
    "password": "12345678"
  }
  ```
- **Response:**
  ```json
  {
    "token": "<your-jwt-token>"
  }
  ```

---

### 3. **Get User Profile**
**Endpoint:** `GET /api/user/profile`

- **Description:** Retrieves the logged-in user's profile.
- **Request Headers:**
  - `Authorization: Bearer <your-jwt-token>`
- **Response:**
  ```json
  {
    "user": {
      "_id": "678ff602e0dbdd095ec2ffc9",
      "username": "testuser",
      "email": "test@example.com"
    }
  }
  ```

---

## Features
- Secure password storage using bcrypt.
- User authentication and JWT-based authorization.
- Middleware for protecting routes.

---

## Future Enhancements
- Role-based access control (e.g., admin vs. user roles).
- Token refresh functionality.
- Password reset functionality.

---

## License
This project is open-source and available for free use.

