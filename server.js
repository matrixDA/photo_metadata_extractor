import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const PORT = 3000;
const app = express();

app.use(express.static(path.resolve(import.meta.dirname, `public`)));
app.use(express.static(path.resolve(import.meta.dirname, `src`)));
app.use(express.static(path.resolve(import.meta.dirname, `dist`)));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(import.meta.dirname, `images`));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage : storage });
/*
app.get(`/` ,(req, res, ) => {
  return res.send(`index.html`);
});*/

app.post(`/api/post/image`, upload.single(`image`), (req, res, next) => {
  console.log(`\nfile received`);
  console.log(req.file, req.body);
});

app.listen(PORT, () => 
{
  console.log(`Access via http://localhost:${PORT}`);
}
);