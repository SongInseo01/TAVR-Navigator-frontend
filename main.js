const express = require('express');
const path = require('path');
const dotenv = require('dotenv');


dotenv.config();

const app = express();

app.use(express.static('src/public'));

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/api/config', (req, res) => {
  res.json({ RWDDB_URL: process.env.RWDDB_URL });
});

app.get('/api/config/id', (req, res) => {
  res.json({ RWDDB_ID_URL: process.env.RWDDB_ID_URL });
});

app.get('/tavr_main.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'tavr_main.html'));
});

app.get('/tavr_dashboard.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'tavr_dashboard.html'));
});

app.get('/tavr_ppi.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'tavr_ppi.html'));
});
const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
