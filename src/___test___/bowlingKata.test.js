const bowlingKata = require('../bowlingKata');

let bowling;

// Test 1.2

describe("Initialize Bowling Kata", function () {
  it("can roll", function () {
    bowling = new bowlingKata();
    for(i = 0; i < 20; i++){
      bowling.roll(0);
    }
    expect(bowling.score()).toBe(0);
  });
});
