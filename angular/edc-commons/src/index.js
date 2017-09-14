var translateProvider = require('./app/translate/EdcTranslateProvider');
var httpInterceptorService = require('./app/httpInterceptor/httpInterceptorService');
var httpInterceptorProvider = require('./app/httpInterceptor/httpInterceptorProvider');
var errorMessagesService = require('./app/errorMessages/errorMessagesService');
var loadingTemplate = require('./loading/loading.html');

require('./app/views/views');
require('./app/user/user');
require('./app/unauthorizedPopIn/unauthorizedPopIn');
require('./app/errorMessages/errorMessages');
require('./app/directives/directives');
require('./app/resource/resource');
//require('./app/directives/common/common');

angular.module('edc-commons', ['common.views', 'common.user', 'common.unauthorizedPopIn', 'common.errorMessages', 'common.directives', 'common.resource']);
angular.module('edc-commons').config(['$translateProvider', translateProvider]);
angular.module('edc-commons').factory('httpInterceptorService', ['$cookies', '$q', 'unauthorizedPopInService', 'userService', httpInterceptorService]);
angular.module('edc-commons').config(['$httpProvider', httpInterceptorProvider]);

angular.module('edc-commons').component('loading', {
	template: loadingTemplate,
	bindings: {}
});
