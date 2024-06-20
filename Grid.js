class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    // create the grid
    this.grid = [];
    for (let row = 0; row < height; row++) {
      let thisRow = [];
      for (let col = 0; col < width; col++) {
        thisRow.push("🌳");
      }
      this.grid.push(thisRow);
    }

    // player - bottom left
    this.grid[height - 1][0] = "🐵";

    // goal - top right
    this.grid[0][width - 1] = "⭐️";

    // console.log(this.grid);
    this.displayGrid();
  }

  displayGrid() {
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        // console.log(this.grid[row][col]);
        process.stdout.write(this.grid[row][col]);
        process.stdout.write("\t");
      }
      process.stdout.write("\n");
    }
  }
}

new Grid(5, 5);
// #backgroundSprites = ["🌳", "🌲", "🌴", "🌵","🎉","🐵","🐾","⭐️","⚔️","🕷"];
