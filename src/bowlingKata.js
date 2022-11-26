module.exports = class bowlingKata {

    constructor() {
        this.tabRolls = [];
    }

    roll(pins) {
        this.tabRolls.push(pins);
    };

    score() {
        let result = 0;
        let index = 0;
        let game = this;

        for(let i = 0; i < 10; i++) {
            if (isStrike()) {
                result += getStrikeScore();
                index++;
            } else if(isSpare()){
                result += getSpareScore();
                index += 2;
            }
            else{
                result += getScore();
                index += 2;
            }
        }
        return result;

        function isStrike() {
            return game.tabRolls[index] == 10;
        }

        function isSpare() {
            return game.tabRolls[index] + game.tabRolls[index+1] == 10;
        }

        function getStrikeScore() {
            return game.tabRolls[index] + game.tabRolls[index+1] + game.tabRolls[index+2];
        }

        function getSpareScore() {
            return game.tabRolls[index] + game.tabRolls[index+1] + game.tabRolls[index+2];
        }

        function getScore() {
            return game.tabRolls[index] + game.tabRolls[index+1];
        }
    };
};


