import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const PORT = 3000;
const app = express();

app.use(express.static(path.resolve(import.meta.dirname, `public`)));
app.use(express.static(path.resolve(import.meta.dirname, `src`)));
app.use(express.static(path.resolve(import.meta.dirname, `dist`)));

const upload = multer({dest: path.resolve(import.meta.dirname, `./images`)});

/*
app.get(`/` ,(req, res, ) => {
  return res.send(`index.html`);
});*/

app.post(`/api/post/image`, upload.single(`image`), (req, res) => {
  res.send(`file received`);
  console.log(req.file, req.body);
});

app.listen(PORT, () => 
{
  console.log(`Access via http://localhost:${PORT}`);
}
);