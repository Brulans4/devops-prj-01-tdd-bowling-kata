const bowlingKata = require('../bowlingKata');

let bowling;

// Test 1.3

describe("Initialize Bowling Kata", function () {
  it("Can roll", function () {
    bowling = new bowlingKata();
    for(i = 0; i < 20; i++){
      bowling.roll(0);
    }
    expect(bowling.score()).toBe(0);
  });

  it("Can roll all ones", function() {
    bowling = new bowlingKata();
    for(i = 0; i < 20; i++){
      bowling.roll(1);
    }
    expect(bowling.score()).toBe(20);
  });
});




