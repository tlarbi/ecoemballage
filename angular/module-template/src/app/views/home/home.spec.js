var angular = require('angular');
require('angular-mocks');
var homeModule = require('./home');

describe('accueil component', function () {
  beforeEach(function () {
    var homeComponent = 'homeComponent';
    angular.module(homeComponent, [homeModule]);
    angular.mock.module(homeComponent);
  });

  it('should render \'Hello World !\'', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<home></home>')($rootScope);
    $rootScope.$digest();
    var home = element.find('div');
    expect(home.html().trim()).toEqual('Hello World !');
  }));
});
