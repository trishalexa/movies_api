Movie CRUD API Summary
This project is an Express API designed to handle a movie database. It allows users to perform CRUD (Create, Read, Update, Delete) operations on movies. Each movie has the following properties:

id (auto-generated, number)
title (string, required)
director (string, required)
year (number, required)
genre (string, required)
The API uses a MySQL database for persistent storage.

API Endpoints:
Get all movies

Route: GET /movies
Description: Fetches a list of all movies in the database.
Get a movie by ID

Route: GET /movies/
Description: Fetches details of a specific movie using its ID.
Create a new movie

Route: POST /movies
Description: Adds a new movie to the collection.
Update a movie by ID

Route: PUT /movies/
Description: Updates an existing movie’s information using its ID.
Delete a movie by ID

Route: DELETE /movies/
Description: Removes a movie from the collection using its ID.
Setup Instructions:
Clone the repository and navigate to the project folder:

git clone <repository-link>
cd BACONG-API-CRUDACTIVITY
Install dependencies:

npm init -y
npm install express mysql2 body-parser
Create the MySQL database and table, then insert sample data:

sql
CREATE DATABASE movie_db;
USE movie_db;

CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    genre VARCHAR(100) NOT NULL
);

INSERT INTO movies (title, director, year, genre) VALUES
('The Shawshank Redemption', 'Frank Darabont', 1994, 'Drama'),
('Fight Club', 'David Fincher', 1999, 'Drama'),
('Gladiator', 'Ridley Scott', 2000, 'Action'),
('The Social Network', 'David Fincher', 2010, 'Drama'),
('The Matrix', 'The Wachowskis', 1999, 'Sci-Fi'),
('Mad Max: Fury Road', 'George Miller', 2015, 'Action'),
('Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime');
Run the server:

node index.js
The server will be running at http://localhost:2030.

Using the API with Insomnia:
GET /movies: Fetch all movies.
GET /movies/{id}: Fetch a movie by its ID.
POST /movies: Add a new movie (provide a JSON body with movie details).
PUT /movies/{id}: Update a movie's details by ID (provide a JSON body with updated details).
DELETE /movies/{id}: Delete a movie by its ID.
Error Handling:
404 Not Found: Movie not found by the given ID.
400 Bad Request: Missing required fields when creating or updating a movie.
Conclusion:
This API provides a simple way to manage a movie database with Node.js, Express, and MySQL, supporting essential operations like adding, viewing, editing, and deleting movies. The project includes basic validation and error handling features.
