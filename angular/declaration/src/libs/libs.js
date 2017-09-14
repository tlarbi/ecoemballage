require('angular');
//require('bootstrap/dist/css/bootstrap.css');
require('angular-messages');
require('angular-sanitize');
require('angular-animate');
require('angular-touch');
require('angular-ui-bootstrap');
require('angular-translate');
require('angular-translate-loader-static-files');
require('angular-translate-storage-local');
//require('bootstrap-toggle');
require('bootstrap-toggle/css/bootstrap-toggle.css');
require('ng-table');
require('edc-commons');
require('angular-cookies');


angular.module('declaration-libs', ['ui.bootstrap', 'pascalprecht.translate', 'ngMessages', 'ngSanitize', 'ngTable', 'edc-commons', 'ngCookies']);

require('./../index');
angular.module('declaration').requires.push('declaration-libs');
