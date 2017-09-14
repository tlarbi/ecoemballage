var homeModuleName = 'home';
var home = angular.module(homeModuleName, []);
home.component(homeModuleName, {
  template: require('./home.html'),
  controller: function () {},
  bindings: {
  }
});

module.exports = homeModuleName;
