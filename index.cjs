const express = require('express');
const mysql = require('mysql');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
    user: 'root',
      password: '',  // Enter your MySQL password here, if you set one
        database: 'movies_db'
        });

        db.connect(err => {
          if (err) {
              console.error('Database connection failed:', err.stack);
                  return;
                    }
                      console.log('Connected to MySQL');
                      });

                      // Start the server
                      const PORT = 2030;
                      app.listen(PORT, () => {
                        console.log(`Server is running on port ${PORT}`);
                        });
                        




