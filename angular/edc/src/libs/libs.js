require('angular');
//require('bootstrap/dist/css/bootstrap.css');
require('angular-messages');
require('angular-sanitize');
require('angular-animate');
require('angular-touch');
require('angular-ui-bootstrap');
require('angular-translate');
//require('bootstrap-toggle');
require('bootstrap-toggle/css/bootstrap-toggle.css');/*indispensable pour la declaration web*/
require('angular-recaptcha/release/angular-recaptcha');
require('ng-table');
require('angular-cookies');
require('angular-ui-router');

angular.module('edc-libs', ['ui.bootstrap', 'pascalprecht.translate', 'ngMessages', 'ngSanitize', 'ngTable', 'vcRecaptcha', 'ngCookies', 'ui.router']);
require('./../index');
angular.module('edc').requires.push('edc-libs');