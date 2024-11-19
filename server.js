import express from "express";
const app = express();

app.use(express.static('./dist'));

app.get('/', (req, res) => {
  res.sendFile("index.html");
});

app.listen(3000);