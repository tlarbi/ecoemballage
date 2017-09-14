module.exports = function(reinitialisationMotDePasseService, $location, commonServices) {
    
    var _self = this;
    
    this.tokenValidFlag = false;
    this.technicalErrorFlag = false;
    
    this.$onInit = function() {
        
        var checkForm = {
            link: undefined
        }
        
        console.log('url params : ', $location.search());
        checkForm.link = $location.search().link;
        _self.form.link = checkForm.link;
        
        reinitialisationMotDePasseService.checkLink(checkForm).then(function(){
            
            _self.tokenValidFlag = reinitialisationMotDePasseService.tokenValidFlag;
            console.log('token controller : ', _self.tokenValidFlag);
        });
        
        var regExList = commonServices.getRegExList();
        //console.log('functions : ', regExList);
        
        // Expressions régulière pour les différents controls
        _self.passRegEx = regExList.passRegEx;
        _self.atLeastNineCarRegEx = regExList.atLeastNineCarRegEx;
        _self.atLeastMajRegEx = regExList.atLeastMajRegEx;
        _self.atLeastMinRegEx = regExList.atLeastMinRegEx;
        _self.atLeastNumRegEx = regExList.atLeastNumRegEx;
        _self.atLeastSpecialCarRegEx = regExList.atLeastSpecialCarRegEx;
    }
    
    this.form = {
        pass: undefined,
        confirmPass: undefined,
        link: undefined
    }
    
    this.checkPattern = function(field) {
        switch(field){
            case "pass":
                return angular.isDefined(_self.form.pass) ? _self.passRegEx.test(_self.form.pass) : false;
            case "maj":
                return angular.isDefined(_self.form.pass) ? _self.atLeastMajRegEx.test(_self.form.pass) : false;
            case "min":
                return angular.isDefined(_self.form.pass) ? _self.atLeastMinRegEx.test(_self.form.pass) : false;
            case "num":
                return angular.isDefined(_self.form.pass) ? _self.atLeastNumRegEx.test(_self.form.pass) : false;
            case "specialCar":
                return angular.isDefined(_self.form.pass) ? _self.atLeastSpecialCarRegEx.test(_self.form.pass) : false;
            case "length":
                return angular.isDefined(_self.form.pass) ? _self.atLeastNineCarRegEx.test(_self.form.pass) : false;
            
        }
    }
    
    this.checkPasswords = function() {
        
        return angular.isUndefined(_self.form.confirmPass) ? false : (_self.form.pass == _self.form.confirmPass);
    }
    
    this.submit = function(){
        reinitialisationMotDePasseService.changePassword(_self.form).then(function(){
            
            _self.technicalErroFlag = reinitialisationMotDePasseService.technicalErrorFlag;
            if(_self.technicalErroFlag){
                
                _self.form.pass = undefined;
                _self.form.confirmPass = undefined;
            }
            
            
        });
    }
}