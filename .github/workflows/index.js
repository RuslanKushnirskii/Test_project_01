const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.APP_ENV || 'development';

app.get('/', (req, res) => {
  res.send(`Parts Unlimited Node.js App  
Environment: ${ENV}  
CI/CD pipeline works successfully!`);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});