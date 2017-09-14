function Recommandation() {
  this.name = 'recommandationResource';
  this.dependencies = ['$http'];
  this.resource = function ($http) {
    var self = {};


    // self.recommandations = $resource('/recommandations/');
    // self.recommandation = $resource('/recommandations/:recommandationId', {recommandationId: '@id'});

    // self.recommandations = $http({
    //   method: 'GET',
    //   url: ''
    // });

    return self;
  };
  this.dependencies.push(this.resource);
}

module.exports = new Recommandation();
