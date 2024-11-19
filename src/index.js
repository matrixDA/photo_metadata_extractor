

const selectButton = document.getElementById(`select-button`);

let chosenFile = null;

selectButton.addEventListener(`click`, (e) => {
  e.preventDefault();

  let input = document.createElement(`input`);
  input.type = `file`;
  input.onchange = () => {
    chosenFile = Array.from(input.files);
  };
  input.click();
});






