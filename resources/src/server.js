import express from 'express';

const PORT = 3000;
const app = express();
const options = {
    cors: true,
    origin: ['http://localhost:3000']
}

const server = app.listen(PORT, () => {
  console.log('server is started');
});

app.use(express.static('index.html'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});