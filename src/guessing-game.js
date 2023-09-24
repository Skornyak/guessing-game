class GuessingGame {
    

    atStart = 0;

    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.atStart = Math.ceil(this.min/2 + this.max/2);
        return this.atStart;
    }

    lower() {
        this.max = this.atStart;
    }

    greater() {
        this.min = this.atStart;
    }
}

module.exports = GuessingGame;
