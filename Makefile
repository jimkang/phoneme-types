test:
	node tests/consonant-vowel-tests.js
	node_modules/mocha/bin/mocha --ui tdd -R spec tests/basictests.js

