const express = require('express'); // Import express
const app = express(); // Initialize the app
const port = 3000; // define a port

app.use('/api/contacts', require('./routes/contactRoutes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
