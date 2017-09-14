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
//require('bootstrap-toggle/css/bootstrap-toggle.css');
require('ng-table');
require('edc-commons');
require('angular-recaptcha/release/angular-recaptcha');
require('angular-cookies');
require('angular-ui-router');

angular.module('relationClient-libs', ['ui.bootstrap',
									   'pascalprecht.translate', 
									   'ngMessages', 
									   'ngSanitize', 
									   'ngTable', 
									   'edc-commons', 
									   'vcRecaptcha', 
									   'ngCookies',
									   'ui.router']);

require('./../index');
angular.module('relationClient').requires.push('relationClient-libs');