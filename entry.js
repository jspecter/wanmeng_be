const result = require('@babel/core').transformFileSync('app.js', {
    plugins: ['dynamic-import-node']
});

const getApp = new Function(result.code);

module.exports = getApp();
