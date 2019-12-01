'use strict'

let ctrlIsDown = false;
let parseResult;
let displayResult;
let radioButtons = form.querySelectorAll('.radio');

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 17) {
    ctrlIsDown = true;
  }
});

window.addEventListener('keyup', (e) => {
  if (e.keyCode === 17) {
    ctrlIsDown = false;
  }
});

textarea.addEventListener('keydown', (e) => {
  if (ctrlIsDown && e.keyCode === 13) {
    submit.click();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let lang;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) lang = radioButtons[i].value;
  }
  parseResult = new ParseText(textarea.value, lang);
  if (!parseResult.stats) {
    parseResult = null;
    return;
  }
  displayResult = new DisplayStats(canvas, parseResult);
});
