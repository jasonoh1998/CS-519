const express = require('express');
const app = express();

app.use('/', express.static('frontend/build'));

app.get('/api', async(req, res) => {
  res.send('Hello, world! This is ' + process.env.KEYVAULT_URI);
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
