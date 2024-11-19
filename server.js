import express from "express";

const PORT = 3000;
const app = express();

app.use(express.static(`./public`));

app.use(express.static(`./src`));

app.listen(
  PORT,
  () => console.log(`Access via http://localhost:${PORT}`)
);