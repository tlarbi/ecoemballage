require('./app/views/views');
require('./app/form/Form');
var resources = require('./app/resources/Resources');
var commons = require('./app/commons/Commons');

angular.module('relationClient', ['relationClient.views', 'relationClient.form', resources, commons]);
