const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      const error = new Error('Database error!');
      error.code = 'ECONNREFUSED';
      throw error;
    } else {
      res.send('Hello, world!');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));