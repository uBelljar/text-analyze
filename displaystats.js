class DisplayStats {
  constructor(canvas, statsObj) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.statsObj = statsObj;
    this.ABC = {
      'ru': ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'],
      'eng': ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    }
    this.setSize();
    this.addGrid();
    this.pasteStats();
  }

  setSize() {
    this.canvas.width = 690;
    this.canvas.height = 300;

    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  addGrid() {
    let iMax = this.width / 10;
    let jMax = this.height / 10;

    this.ctx.translate(0.5, 0.5);
    this.ctx.strokeStyle = '#00000033';

    this.ctx.beginPath();
    for (let i = 1; i < iMax; i++) {
      this.ctx.moveTo(i * 10, -1);
      this.ctx.lineTo(i * 10, this.height + 1);
    }
    for (let j = 1; j < jMax; j++) {
      this.ctx.moveTo(-1, j * 10);
      this.ctx.lineTo(this.width + 1, j * 10);
    }
    this.ctx.stroke();
  }

  pasteStats() {
    let stats = this.statsObj.stats;
    let totalLetters = this.statsObj.totalLetters;
    let abc = this.ABC[this.statsObj.lang];

    this.ctx.font = 'bold 25px monospace'

    for (let i = 0; i < abc.length; i++) {
      let letter = abc[i];
      let percent = (stats[letter] / totalLetters) * 100;
      this.ctx.fillStyle = 'blue';
      this.ctx.fillRect(20 + i * 20, 250, 10, -(percent * 20)); //умножение на 20 для маштаба, нужно переработать
      this.ctx.fillStyle = 'black';
      this.ctx.fillText(letter, 18 + i * 20, 270);
    }
  }
}
