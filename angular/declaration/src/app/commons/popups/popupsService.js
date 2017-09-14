module.exports = function($uibModal, $q) {
    
    var _self = this;
    var popupsCtrl = require('./popupsCtrl');
    
    this.controlModal = function(action){

        switch(action){
            case 'resolve':
                console.log('resolve modal : ', action);
                _self.modal.close();
                _self.deferedModal.resolve();
                break;
            case 'reject':
                console.log('reject modal : ', action);
                _self.modal.close();
                _self.deferedModal.reject('test');
        }
    }
    
    
    var openPopup = function(requiredTemplate) {

        _self.deferedModal = $q.defer();

        console.log('into function');
        _self.modal = $uibModal.open({
            template: requiredTemplate,
            controller: ['popupsService', popupsCtrl],
            controllerAs: 'popupsCtrl',
            backdrop: 'static',
            keyboard: false
        });
        return _self.deferedModal.promise;
    }
    
    this.openDepotDeclarationFailure = function(message) {
        
        _self.messageError = message;
        var template = require('./depotDeclarationFailure.html');
        return openPopup(template);
    }
    
    this.openDepotDeclarationSuccess = function(montant) {
        
        _self.contributionTotale = montant;
        var template = require('./depotDeclarationSuccess.html');
        return openPopup(template);
    }
    
    return this;
}