module.exports = function(depotDeclarationService, userService) {
    
     var _self = this;
    
    this.extensionsList = ['zip', 'fde'];
    
    this.$onInit = function() {
        
        depotDeclarationService.getMotifs().then(function(response){
            console.log('get motifs success : ', response);
            _self.motifsCorrective = response.data;
        }, function(response){
            console.log('get motifs failure : ', response);
        })
    }
    
    this.submit = function(formulaire) {
        
        console.log('formulaire : ', formulaire)
        if(formulaire.$invalid || !formulaire.$valid) {
            console.log('invalid form : show errors');
            setTouch(formulaire);
            focusInputWithError('depot-declaration-form');
            console.log('complete errors showing');
            return;
        }
        
        _self.sendingFormFlag = true;
        console.log("submit clicked !!");
        
        if(angular.isUndefined(_self.form.comment))
            _self.form.comment = '';
        
        if(angular.isUndefined(_self.form.motif))
            _self.form.motif = '';
        
        if(angular.isUndefined(_self.form.comment))
            _self.form.comment = '';
        
        if(angular.isUndefined(_self.form.declarantId))
            _self.form.declarantId = '';
        
        if(angular.isUndefined(_self.form.declarationId))
            _self.form.declarationId = '';
        
        depotDeclarationService.submit(_self.form).then(function(){
            _self.sendingFormFlag = false;
        });
    }
    
    var focusInputWithError = function(idValue) {
        var elem = document.getElementById(idValue).querySelector('.ng-invalid');
        if(elem.id == 'file-upload')
            document.getElementById('file-link').focus();
        else
            elem.focus();
    }
    
    var setTouch = function(formulaire) {

        console.log('formulaire : ', formulaire);
        for(var element in formulaire) {
            if(angular.isObject(formulaire[element]) && formulaire[element].hasOwnProperty('$touched') && formulaire[element].$untouched) {
                formulaire[element].$setTouched();
                formulaire[element].$$parseAndValidate();
            }
        }
    }
    
    this.navigate = function() {
        window.location = '/accueil-conseiller';
    }
   
}