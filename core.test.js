const assert = require('assert');
const ListCleaner = require('./core');

const raw = ' banana \n apple \n banana \n\n orange ';
const cleaned = ListCleaner.clean(raw, { sort: 'asc', prefix: '- ' });
assert.strictEqual(cleaned, '- apple\n- banana\n- orange');
console.log('ok, all ListCleaner assertions passed');
