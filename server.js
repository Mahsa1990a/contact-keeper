const express = require('express');

const app = express();

//Add a route
app.get('/', (req, res) => {
  res.send('OkOkOk');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));