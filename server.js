import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const PORT = 3000;
const app = express();

const File_Name = `FILE_UPLOADED`;

app.use(express.static(path.resolve(import.meta.dirname, `public`)));
app.use(express.static(path.resolve(import.meta.dirname, `src`)));
app.use(express.static(path.resolve(import.meta.dirname, `dist`)));

const upload = multer({dest: path.resolve(import.meta.dirname, `public`)});


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  return next();
});

app.get(`/` ,(req, res, ) => {
  return res.send(`index.html`);
});

app.post(`/public/images`, upload.single(`file`), (req, res) => {
  res.send(`uploaded successfully`);
});

//app.get(`./images`, async(req, res) => {
//  const images = await fs.promises.readdir(path.resolve(import.meta.dirname, `public`));
//});

app.listen(PORT, () => 
{
  console.log(`Access via http://localhost:${PORT}`);
}
);