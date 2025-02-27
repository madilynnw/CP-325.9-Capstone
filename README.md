Music Generator Backend

Backend for "They Not Like Us" Music Generator

Description

This backend serves as the API for the "They Not Like Us" music generator, allowing users to generate playlists based on emotions. The backend handles CRUD operations for music suggestions and connects to a database to store and retrieve data.

Table of Contents

Technologies Used

API Endpoints

Setup and Installation

Environment Variables

Project Next Steps

About the Author

Technologies Used

Node.js

Express.js

MongoDB

Mongoose

Cors

Dotenv

Axios

API Endpoints

Music Suggestions

GET /api/music - Retrieve all music suggestions

POST /api/music - Add a new music suggestion

DELETE /api/music/:emotion - Delete a music suggestion based on emotion

Setup and Installation

Clone the repository:

git clone https://github.com/your-username/music-generator-backend.git

Navigate to the backend directory:

cd music-generator-backend

Install dependencies:

npm install

Start the server:

npm start

Environment Variables

Create a .env file in the root directory and add the following:

PORT=3000
MONGO_URI=mongodb://localhost:27017/

Project Next Steps

Implement authentication for users

Add additional playlist filtering options

Improve database schema for scalability

About The Author

I enjoy backend development because it powers applications and ensures smooth functionality. ([linkedin](https://www.linkedin.com/in/whittle-madilynn/)
