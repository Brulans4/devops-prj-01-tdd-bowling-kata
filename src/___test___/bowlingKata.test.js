const bowlingKata = require('../bowlingKata');

let bowling;

// Test 1.1

describe("Initialize Bowling Kata", function () {
  it("Can start an instance of the game", function () {
    bowling = new bowlingKata();
  });
});
