const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.json());

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// POST handler
app.post('/submit', (req, res) => {
  const name=req.body.name;
  const message=req.body.message;

  console.log('Received data:', name, message);
  res.send(`Thanks ${name}, your message "${message}" was received!`);
});

// Optional GET route with slug
app.get('/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}`);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);

});
