require('angular');
require('angular-translate');
require('angular-translate-loader-static-files');
require('angular-translate-storage-local');


angular.module('edc-commons-libs', ['pascalprecht.translate']);
require('./../index');
angular.module('edc-commons').requires.push('edc-commons-libs');