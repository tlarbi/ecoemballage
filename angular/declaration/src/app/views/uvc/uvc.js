var web = require('./web/web');
var excel = require('./excel/excel');


var moduleName = 'declaration.uvc';
angular.module(moduleName, [web, excel]);


module.exports = moduleName;