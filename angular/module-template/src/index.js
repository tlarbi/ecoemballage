var angular = require('angular');
var views = require('./app/views/views');
require('bootstrap/dist/css/bootstrap.css');
require('angular-animate');
require('angular-touch');
require('angular-ui-bootstrap');
angular.module('app', ['ui.bootstrap', views]);
