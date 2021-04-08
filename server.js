const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database:
connectDB();

//Init Middleware
app.use(express.json({ extended: false })); //by doing this we can accept body data

//Add a route
// app.get('/', (req, res) => {
//   //it's gonna be a json API so:
//   res.json({ msg: 'Welcome to the ContactKeeper API.....' });
// });

// Define our routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  // Now create route:
  app.get('*', (req, res) => { // '*' means anything that is not line 19,20,21
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })   
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));