class GridObject {
  #backgroundSprites = ["🌳", "🌲", "🌴", "🌵"];

  constructor(sprite, type = "undiscovered") {
    if (!sprite) {
      const randomIndex = Math.floor(
        Math.random() * this.#backgroundSprites.length
      );

      this.sprite = this.#backgroundSprites[randomIndex];
    } else {
      this.sprite = sprite;
    }
    this.type = type;
  }
}

export { GridObject };

// sprite is a two-dimensional image or animation used in game environment