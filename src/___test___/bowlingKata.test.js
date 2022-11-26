const bowlingKata = require("../bowlingKata");

let bowling;

describe("Game Bowling Kata", function () {
  beforeEach(function () {
    bowling = new bowlingKata();
  });

  // Test 1
  it("Can roll", function () {
    rollMany(0, 20);
    expect(bowling.score()).toBe(0);
  });

  // Test 2
  it("Can roll all ones", function () {
    rollMany(1, 20);
    expect(bowling.score()).toBe(20);
  });

  // Test 3
  it("Can roll a spare", function () {
    bowling.roll(5);
    bowling.roll(5); //spare
    bowling.roll(3);
    rollMany(0, 17);
    expect(bowling.score()).toBe(16);
  });

  // Test 4
  it("Can roll a strike", function () {
    bowling.roll(10); //strink
    bowling.roll(4);
    bowling.roll(3);
    rollMany(0, 16);
    expect(bowling.score()).toBe(24);
  });

  // Test 5
  it("Can roll a perfect game", function () {
    rollMany(10, 12); //perfect game
    expect(bowling.score()).toBe(300);
  });

  let rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  };
});
