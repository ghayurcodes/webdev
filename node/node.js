// Step 1: Import express
const express = require('express');
const app = express();
const port = 3000;

// Step 2: Define a route
app.get('/', (req, res) => {
  res.send('Hello from Express! hello ghayur king of the pakistan');
});

// Step 3: Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
