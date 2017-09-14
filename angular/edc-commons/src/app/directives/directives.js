var emailDirectiveModule = require('./emailDirective/emailDirective');
var siretDirectiveModule = require('./siretDirective/siretDirective');
var selectCountriesModule = require('./selectCountries/selectCountries');
var controlInputModule = require('./controlInputDirective/controlInputDirective');
var telDirectiveModule = require('./telDirective/telDirective');
var fileUploadDirectiveModule = require('./fileUploadDirective/fileUploadDirective');
var loadersModule = require('./loaders/loaders');

var commonService = require('./common/commonService');
var moduleName = 'common.directives';

angular.module(moduleName, [emailDirectiveModule, siretDirectiveModule, selectCountriesModule, controlInputModule, telDirectiveModule, fileUploadDirectiveModule, loadersModule]);

angular.module(moduleName).factory('commonService', commonService);
