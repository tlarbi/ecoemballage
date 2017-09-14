var moduleName = 'common.selectCountries';
angular.module(moduleName, []);

var selectCountriesBody = require('./selectCountriesBody');
var selectCountriesCtrl = require('./selectCountriesCtrl');

angular.module(moduleName).directive('selectCountries', [selectCountriesBody]);
angular.module(moduleName).controller('selectCountriesCtrl', ['userService', selectCountriesCtrl]);

module.exports = moduleName;
