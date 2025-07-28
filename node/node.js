const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional dynamic route (e.g., /ghayur)
app.get(`/:slug`, (req, res) => {
  console.log('Route param (slug):', req.params.slug);
  console.log('Query params:', req.query);
  res.send(`Hello from Express! Hello Ghayur, king of 7 seas ${req.params.slug}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
