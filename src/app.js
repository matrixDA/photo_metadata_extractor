import ExifReader from 'exifreader';

document.querySelector(`form`).addEventListener(`submit`, handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  const file = e.target.elements.file.files[0];
  console.group(file);

  try {

    const tags = await ExifReader.load(file);

  } catch (e) {
    console.log(e);
  }
};







