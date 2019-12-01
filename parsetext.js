class ParseText {
  constructor(text, lang) {
    this.data = text;
    this.lang = lang;
    this.stats = this.makeStat();
  }

  makeStat() {
    let stats = {};
    let regexp = {'ru':/[а-яё]/gmi, 'eng': /[a-z]/gmi};
    let text = this.data.toUpperCase();
    let letters = text.match(regexp[this.lang]);

    if (!letters) return;

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
