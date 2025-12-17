// getting express module
const express = require('express');

//  handling file paths
const path = require('path');

// create express app
const app = express();

// API routes
const api_routes = require('./api_routes_dev.js'); // Adjusted to match the file name
app.use('/api', api_routes);

// serve static files (JS, CSS)
app.use(express.static(__dirname)); 

// serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dev_html.html')); // Adjusted to match the HTML file name
});

// start server 
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');//what appears in the terminal
});
