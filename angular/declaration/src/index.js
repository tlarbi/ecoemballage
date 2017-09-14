/*require('./style/main.css');*/
require('./app/views/views');
var resources = require('./app/resources/Resources');
var commons = require('./app/commons/commons');

angular.module('declaration', ['declaration.views', resources, commons]);

