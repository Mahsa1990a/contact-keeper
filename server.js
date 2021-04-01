const express = require('express');

const app = express();

//Add a route
app.get('/', (req, res) => {
  //it's gonna be a json API so:
  res.json({ msg: 'Welcome to the ContactKeeper API.....' });
});

// Define our routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));