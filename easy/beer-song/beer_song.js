class BeerSong {

  static twoBottlesLyric = `2 bottles of beer on the wall, 2 bottles of beer.\n` +
    `Take one down and pass it around, 1 bottle of beer ` +
    `on the wall.\n\n`;

  static oneBottleLyric = `1 bottle of beer on the wall, 1 bottle of beer.\n` +
  `Take it down and pass it around, no more bottles of beer ` +
  `on the wall.\n\n`;

  static noBottlesLyric = `No more bottles of beer on the wall, no more bottles of beer.\n` +
  `Go to the store and buy some more, 99 bottles of beer ` +
  `on the wall.\n\n`;

  static verse(number) {
    switch (number) {
      case 2:
        return BeerSong.twoBottlesLyric;
      case 1:
        return BeerSong.oneBottleLyric;
      case 0:
        return BeerSong.noBottlesLyric;
      default:
        return `${number} bottles of beer on the wall, ${number} bottles of beer.\n` +
        `Take one down and pass it around, ${number - 1} bottles of beer ` +
        `on the wall.\n\n`;
    }
  }

  static verses(startingVerse, endingVerse) {
    let lyrics = ''
    for (let currentVerse = startingVerse; currentVerse >= endingVerse; currentVerse --) {
      lyrics += this.verse(currentVerse)
    }
    return lyrics;
    
  } 

  static lyrics() {
    return this.verses(99, 0);
  }
}


console.log(BeerSong.lyrics());
module.exports = BeerSong