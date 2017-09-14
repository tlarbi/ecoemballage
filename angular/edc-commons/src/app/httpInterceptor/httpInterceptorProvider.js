module.exports = function ($httpProvider) {
  $httpProvider.interceptors.push('httpInterceptorService');
}
