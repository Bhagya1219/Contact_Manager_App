const express = require('express'); // Import express
const router = express.Router(); // Initialize the router

router.route('/').get((req, res) => {
  res.send('Get all contacts');
});

module.exports = router; // Export the router