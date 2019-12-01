'use strict'
/* Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например,
юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта,
вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст,
который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором.
Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно,
не имеет повторяющихся абзацей или "невозможных" слов. */ //573 буквы

let ctrlIsDown = false;
let parseResult;
let displayResult;

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
  parseResult = new ParseText(textarea.value);
  displayResult = new DisplayStats(canvas, parseResult);
});


// let ctx = canvas.getContext('2d');
// ctx.translate(0.5, 0.5);
// ctx.fillStyle = 'blue';
// ctx.strokeStyle = '#00000033';
// ctx.fillRect(100, 10, 10, 100);
// ctx.fillRect(150, 10, 10, 100);
// ctx.font = '20px sans-serif'
// ctx.fillText('TEST', 0, 300);

// ctx.beginPath();
//
// for (let i = 1; i < 30; i++) {
//   ctx.moveTo(-1, i * 10);
//   ctx.lineTo(301, i * 10);
//
//   ctx.moveTo(i * 10, -1);
//   ctx.lineTo(i * 10, 301);
// }
// ctx.stroke();
