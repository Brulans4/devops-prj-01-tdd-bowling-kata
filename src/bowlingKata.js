module.exports = class bowlingKata {

    constructor() {
        this.tabRolls = [];
    }

    roll(pins) {
        this.tabRolls.push(pins);
    };

    score() {
        let result = 0;
        for(let i = 0; i < 20; i++) {
            result += this.tabRolls[i];
        }
        return result;
    };
};


