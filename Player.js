class Player {
  #stats = {
    attack: 0,
    defense: 0,
    hp: 0,
  };
  constructor(name, stats) {
    this.name = name;
    this.#stats = stats;
  }

  getName() {
    return this.name;
  }

  getStats() {
    return {
      attack: this.#stats.attack,
      defense: this.#stats.defense,
      hp: this.#stats.hp,
    };
  }

  addToStats(statsOjbject) {
    if (statsOjbject.attack) {
      this.#stats.attack += statsOjbject.attack;
    }

    if (statsOjbject.defense) {
      this.#stats.defense += statsOjbject.defense;
    }

    if (statsOjbject.hp) {
      this.#stats.hp += statsOjbject.hp;
    }
  }

  desscibe() {
    const stats = this.#stats;
    console.log(
      `Player Stats: HP: ${stats.hp} ATK: ${stats.attack} DEF: ${stats.defense}`
    );
  }
}

export { Player };
