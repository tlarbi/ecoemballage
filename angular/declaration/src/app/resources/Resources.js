var declarationRessource = require('./declaration/Declaration');
var recommandationResource = require('./declaration/recommandation/Recommandation');
var moduleName = 'declaration.resources';
angular.module(moduleName, []);
angular.module(moduleName).factory(declarationRessource.name, declarationRessource.dependencies);
angular.module(moduleName).factory(recommandationResource.name, recommandationResource.dependencies);

module.exports = moduleName;
