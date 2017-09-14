function httpInterceptorService ($cookies, $q, unauthorizedPopInService, userService) {
  var _self = this;

  _self.userTokenHeader = 'user-token';

  _self.request = function (config) {
      var openAmCookie = $cookies.get(userService.cookieOpenAM);
      config.headers[_self.userTokenHeader] = openAmCookie;

      return config;
  }

  _self.responseError = function (response) {
    var fromUrl = response.config.url.toLowerCase();
    var fromWebApi = fromUrl.indexOf('/portailapp/') >= 0 || fromUrl.indexOf('/declarationapp/') >= 0;
    var httpMethod = response.config.method.toLowerCase();
    var writeHttpMethod = (httpMethod == 'post' || httpMethod == 'put' || httpMethod == 'delete');

    // console.log('fromUrl', fromUrl);
    // console.log('fromWebApi', fromWebApi);
    // console.log('httpMethod', httpMethod);
    // console.log('writeHttpMethod', writeHttpMethod);

    if (fromWebApi && writeHttpMethod && response.status == 403) {
      unauthorizedPopInService.open();
    }

    return $q.reject(response);
  };

  return _self;
}

module.exports = httpInterceptorService;
