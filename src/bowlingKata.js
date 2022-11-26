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

        for(let i = 0; i < 10; i++) {
            if(this.tabRolls[index] + this.tabRolls[index+1] == 10){
                result += this.tabRolls[index] + this.tabRolls[index+1] + this.tabRolls[index+2];
            }
            else{
                result += this.tabRolls[index] + this.tabRolls[index+1];
            }
            index += 2;
        }
        return result;
    };
};


