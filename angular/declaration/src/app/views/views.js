var recommandationModule = require('./recommandation/Recommandation');
var uvcModule = require('./uvc/uvc');
var choixdeclarationModule = require('./choixdeclaration/choixdeclaration');
var historiqueDeclarationModule = require('./historique/historique');
var historiqueWidgetModule = require('./historique_widget/historique_widget');
var accueilDeclarationModule = require('./accueil_declaration/accueil_declaration');
var simulateurModule = require('./simulateur/simulateur');
var entrepriseModule = require('./entreprise/entreprise');
var declarationforfaitModule = require('./declarationforfait/declarationforfait');
var widgetuploadModule = require('./widgetupload/widgetupload');
var lancementrpcModule = require('./lancementrpc/lancementrpc');
var validationModule = require('./validation/validation');
var controleEcartModule = require('./controleecart/controleecart');
var rpcModule = require('./rpc/rpc');
var widgetrpcModule = require('./widgetrpc/widgetrpc');
var depotDeclarationModule = require('./depotDeclaration/depotDeclaration');

angular.module('declaration.views', [historiqueDeclarationModule, recommandationModule, uvcModule, choixdeclarationModule, historiqueWidgetModule, accueilDeclarationModule, simulateurModule, declarationforfaitModule, widgetuploadModule, lancementrpcModule, validationModule, entrepriseModule, controleEcartModule,widgetrpcModule, rpcModule, depotDeclarationModule]);