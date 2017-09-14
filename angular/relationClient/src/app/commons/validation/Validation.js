var checkSameValue = require('./checkSameValue/CheckSameValue');
var moduleName = 'relationClient.commons.validation';
angular.module(moduleName, []);

angular.module(moduleName).directive('checkSameValue', [checkSameValue]);

module.exports = moduleName;