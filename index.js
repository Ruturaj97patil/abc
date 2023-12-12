const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Use cors middleware to handle CORS headers
app.use(cors());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'student',
});

connection.connect();

app.get('/students', (req, res) => {
  connection.query('SELECT * FROM data', (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
