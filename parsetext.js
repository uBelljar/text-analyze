class ParseText {
  constructor(text) {
    this.data = text;
    this.stats = this.makeStat();
    this.lang = 'ru'; //добавить язык
  }

  makeStat() {
    let stats = {};
    let regexp = /[а-яё]/gmi;
    let text = this.data.toUpperCase();
    let letters = text.match(regexp);

    this.totalLetters = letters.length;

    for (let i = 0; i < letters.length; i++) {
      if (stats[letters[i]] === undefined) {
        stats[letters[i]] = 1;
      } else  {
        stats[letters[i]]++;
      }
    }
    return stats;
  }

  getStat() {
    return this.stats;
  }
}
