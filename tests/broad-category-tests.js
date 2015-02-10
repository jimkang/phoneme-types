var test = require('tape');
var phonemeTypes = require('../phoneme-types');

test('Basic tests', function basics(t) {
  t.plan(8);

  t.equal(phonemeTypes.isConsonantish('AA'), false);
  t.equal(phonemeTypes.isConsonantish('K'), true);

  t.equal(phonemeTypes.isVowelish('UH'), true);
  t.equal(phonemeTypes.isVowelish('Y'), false);

  t.equal(phonemeTypes.isSyllableEnder('T'), true);
  t.equal(phonemeTypes.isSyllableEnder('CH'), true);
  t.equal(phonemeTypes.isSyllableEnder('R'), false);
  t.equal(phonemeTypes.isSyllableEnder('S'), false);
});
