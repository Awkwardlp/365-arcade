const assert = require('assert');
const {
  calculateLevel,
  calculateAverage,
  calculateProximity,
  compareGuess,
  calculateCps,
  shuffleArray,
  filterGames,
  calculateRank,
  calculateWpm,
  evaluateStroopMatch,
  checkSequenceStep,
  ADVANCED_GAMES,
  formatControlsChips
} = require('./app.js');

// 1. calculateLevel tests
assert.deepStrictEqual(calculateLevel(0), { level: 1, progressPercent: 0, currentXp: 0 });
assert.deepStrictEqual(calculateLevel(75), { level: 1, progressPercent: 75, currentXp: 75 });
assert.deepStrictEqual(calculateLevel(100), { level: 2, progressPercent: 0, currentXp: 100 });
assert.deepStrictEqual(calculateLevel(250), { level: 3, progressPercent: 50, currentXp: 250 });

// 2. calculateAverage tests
assert.strictEqual(calculateAverage([]), 0);
assert.strictEqual(calculateAverage([200, 300]), 250);
assert.strictEqual(calculateAverage([150, 160, 170]), 160);

// 3. calculateProximity tests
const close = calculateProximity(48, 50, 100);
assert.strictEqual(close.percent >= 85, true);
assert.strictEqual(close.label.includes('Mendidih'), true);

const exact = calculateProximity(50, 50, 100);
assert.strictEqual(exact.percent, 100);
assert.strictEqual(exact.label, 'Tepat!');

// 4. compareGuess tests with maxRange
assert.strictEqual(compareGuess(50, 50, 100), 'correct');
assert.strictEqual(compareGuess(25, 50, 100), 'too_low');
assert.strictEqual(compareGuess(75, 50, 100), 'too_high');
assert.strictEqual(compareGuess(101, 50, 100), 'invalid');
assert.strictEqual(compareGuess(250, 250, 500), 'correct');

// 5. calculateCps tests
assert.strictEqual(calculateCps(40, 5), 8.0);
assert.strictEqual(calculateCps(15, 5), 3.0);
assert.strictEqual(calculateCps(0, 5), 0.0);
assert.strictEqual(calculateCps(10, 0), 0.0);

// 6. shuffleArray tests
const sample = ['a', 'b', 'c', 'd', 'e'];
const shuffled = shuffleArray(sample);
assert.strictEqual(shuffled.length, sample.length);
assert.deepStrictEqual([...shuffled].sort(), [...sample].sort());

// 7. filterGames tests
assert.strictEqual(ADVANCED_GAMES.length, 8);
ADVANCED_GAMES.forEach(game => {
  assert.strictEqual(typeof game.id, 'string');
  assert.strictEqual(typeof game.title, 'string');
  assert.strictEqual(typeof game.playUrl, 'string');
  assert.strictEqual(game.playUrl.length > 0, true);
  assert.strictEqual(typeof game.controls, 'string');
  assert.strictEqual(typeof game.engine, 'string');
});
const threeJsGames = filterGames(ADVANCED_GAMES, '3d', '');
assert.strictEqual(threeJsGames.length, 5);

const arcadeGames = filterGames(ADVANCED_GAMES, 'arcade', '');
assert.strictEqual(arcadeGames.length, 3);

const searchCity = filterGames(ADVANCED_GAMES, 'all', 'city');
assert.strictEqual(searchCity.length, 1);
assert.strictEqual(searchCity[0].id, '3d_city');

// 8. calculateRank tests
const mockBoard = [{ score: 200 }, { score: 220 }, { score: 250 }];
// Lower is better (reaction time)
assert.strictEqual(calculateRank(190, mockBoard, true), 1);
assert.strictEqual(calculateRank(210, mockBoard, true), 2);
assert.strictEqual(calculateRank(230, mockBoard, true), 3);
assert.strictEqual(calculateRank(260, mockBoard, true), 4);
// Higher is better (CPS)
const mockCpsBoard = [{ score: 10 }, { score: 8 }, { score: 6 }];
assert.strictEqual(calculateRank(11, mockCpsBoard, false), 1);
assert.strictEqual(calculateRank(9, mockCpsBoard, false), 2);
assert.strictEqual(calculateRank(5, mockCpsBoard, false), 4);

// 9. calculateWpm tests
assert.strictEqual(calculateWpm(0, 30), 0);
assert.strictEqual(calculateWpm(100, 0), 0);
assert.strictEqual(calculateWpm(-10, 30), 0);
assert.strictEqual(calculateWpm(100, -5), 0);
assert.strictEqual(calculateWpm(150, 60), 30);
assert.strictEqual(calculateWpm(300, 30), 120);

// 10. evaluateStroopMatch tests
assert.strictEqual(evaluateStroopMatch('red', 'red'), true);
assert.strictEqual(evaluateStroopMatch('RED', 'red'), true);
assert.strictEqual(evaluateStroopMatch('red', 'blue'), false);
assert.strictEqual(evaluateStroopMatch('green', 'green'), true);

// 11. checkSequenceStep tests
assert.strictEqual(checkSequenceStep([], []), true);
assert.strictEqual(checkSequenceStep([1, 4, 2], [1]), true);
assert.strictEqual(checkSequenceStep([1, 4, 2], [1, 4]), true);
assert.strictEqual(checkSequenceStep([1, 4, 2], [1, 3]), false);
assert.strictEqual(checkSequenceStep([1, 4, 2], [1, 4, 2]), true);
assert.strictEqual(checkSequenceStep([1, 4, 2], [1, 4, 2, 5]), false);
assert.strictEqual(checkSequenceStep(null, []), false);

// 12. formatControlsChips tests
assert.strictEqual(formatControlsChips(''), '');
const formattedSample = formatControlsChips('WASD (Gerak), Mouse (Pandang)');
assert.strictEqual(formattedSample.includes('<kbd class="adv-ctrl-kbd">WASD</kbd>'), true);
assert.strictEqual(formattedSample.includes('<span class="adv-ctrl-act">Gerak</span>'), true);
assert.strictEqual(formattedSample.includes('<kbd class="adv-ctrl-kbd">Mouse</kbd>'), true);
assert.strictEqual(formattedSample.includes('<span class="adv-ctrl-act">Pandang</span>'), true);

const rawFallback = formatControlsChips('Keyboard Saja');
assert.strictEqual(rawFallback.includes('<span class="adv-ctrl-act">Keyboard Saja</span>'), true);

console.log('All comprehensive tests passed successfully.');
