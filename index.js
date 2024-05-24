// index.js

const { provinces, names, products } = require('./data');
const forEachBasics = require('./forEachBasics');
const uppercaseTransformation = require('./uppercaseTransformation');
const nameLengths = require('./nameLengths');
// Require other task modules here...

// Task executions
forEachBasics(names, provinces);
uppercaseTransformation(provinces);
nameLengths(names);
// Execute other tasks here...