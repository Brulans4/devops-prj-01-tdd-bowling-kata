const bowlingKata = require('../bowlingKata');

let bowling;

describe("Game Bowling Kata", function () {

   beforeEach(function () {
      bowling = new bowlingKata();
   });

  // Test 1.3
  it("Can roll", function () {
    rollMany(0, 20);
    expect(bowling.score()).toBe(0);
  });

  // Test 2.1
  it("Can roll all ones", function() {
    rollMany(1, 20);
    expect(bowling.score()).toBe(20);
  });

  let rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  };
});




