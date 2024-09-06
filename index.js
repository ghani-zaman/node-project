const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Production');
});

app.get('/users', (req, res) => {
  const users = require('./user-data.json');
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/stress-cpu', (req, res) => {
  let startTime = Date.now();
  let duration = 5 * 60 * 1000; // 5 minutes in milliseconds

  while (Date.now() - startTime < duration) {
    let x = 0;
    for (let i = 0; i < 1e7; i++) {
      x += Math.sqrt(i); // CPU intensive task
    }
  }

  res.send('CPU stress test completed after 5 minutes');
});