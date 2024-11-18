const ExifReader = require('exifreader');

const selectButton = document.getElementById('select-button');

let chosenFile;

selectButton.addEventListener('click', (e) => {
  e.preventDefault();

  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = () => {
    chosenFile = Array.from(input.files);
    console.log(chosenFile);
  };
  input.click();
});






