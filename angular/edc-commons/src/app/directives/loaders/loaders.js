var moduleName = 'common.loaders';
angular.module(moduleName, []);

var loadersBody = require('./loadersBody');
angular.module(moduleName).directive('loader', loadersBody);

module.exports = moduleName;
