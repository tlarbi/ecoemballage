module.exports = function (inscriptionService, vcRecaptchaService, userService, commonServices) {

    var _self = this;
    
    this.$onInit = function() {
        
        _self.functions = userService.getFunctions();
        var regExList = commonServices.getRegExList('inscription');
        //console.log('functions : ', regExList);
        
        // Expressions régulière pour les différents controls 
        _self.emailRegEx = regExList.emailRegEx;
        _self.telRegEx = regExList.telRegEx;
        _self.passRegEx = regExList.passRegEx;
        _self.clientNumberRegEx = regExList.clientNumberRegEx;
        _self.atLeastNineCarRegEx = regExList.atLeastNineCarRegEx;
        _self.atLeastMajRegEx = regExList.atLeastMajRegEx;
        _self.atLeastMinRegEx = regExList.atLeastMinRegEx;
        _self.atLeastNumRegEx = regExList.atLeastNumRegEx;
        _self.atLeastSpecialCarRegEx = regExList.atLeastSpecialCarRegEx;
        
        // google kaptcha public keys
        if(window.location.hostname == 'monespace-ad.e-fil.com' || window.location.hostname == 'monespace-ee.e-fil.com'
          || window.location.hostname == 'monespace.ecoemballages.fr' || window.location.hostname == 'monespace.adelphe.fr'
          || window.location.hostname == 'monespace-ad2.e-fil.com' || window.location.hostname == 'monespace-ee2.e-fil.com'
          || window.location.hostname == 'clients.emballages.citeo.com')
            _self.captchaKey = '6LdYWRAUAAAAALbzd_1PuNAdDHwwvdDeNGwfume4';
        else
            _self.captchaKey = '6LdQjgwUAAAAAJQZmR6MEPhoGROqGbSox5n9ZvQx'; // key for ecoemballages.int.fr ecoemballages.dev.fr eco.dev.fr
        
        if(_self.isEcoContext()){
            _self.orgaContext = 'Citeo';
            _self.mailContact = 'cil@citeo.com';
        }
        else{
            _self.orgaContext = 'Adelphe';
            _self.mailContact = 'entreprises@adelphe.fr';
        }
        
        _self.linkMail = _self.linkMailPattern.replace('#linkMail#', _self.mailContact).replace('#mail#', _self.mailContact);
    }
    
    // google kaptcha public keys
    //this.captchaKey = '6LdQjgwUAAAAAJQZmR6MEPhoGROqGbSox5n9ZvQx' // key for ecoemballages.int.fr ecoemballages.dev.fr eco.dev.fr
    
    //flags
    this.processFlag = false;
    this.focusFlag = false;
    this.focusEmailFlag = false;
    this.focusClientNumberFlag = false;
    this.captchaCheckedFlag = false;
    this.sendingFormFlag = false;
    
    this.linkMailPattern = '<a href="mailto:#linkMail#">#mail#</a>'
    
    // form sended to web api for create a user accout 
    this.form = {
        lastName: undefined,
        firstName: undefined,
        pass: undefined,
        confirmPass: undefined,
        email: undefined,
        tel: undefined,
        civility: undefined,
        clientNumber: undefined,
        captchaToken: undefined,
        function: undefined,
        otherFunction: undefined
        
    };
    
    
    this.isEcoContext = function()
    {
        var urlRegEx = /eco|ee/;
        var url = window.location.hostname;
        return urlRegEx.test(url);
    }
    
    this.checkPattern = function(field) {
        
        //console.log(field);
        switch(field){
            case "pass":
                return !_self.isEmpty("pass") ? _self.passRegEx.test(_self.form.pass) : false;
            case "maj":
                return !_self.isEmpty("pass") ? _self.atLeastMajRegEx.test(_self.form.pass) : false;
            case "min":
                return !_self.isEmpty("pass") ? _self.atLeastMinRegEx.test(_self.form.pass) : false;
            case "num":
                return !_self.isEmpty("pass") ? _self.atLeastNumRegEx.test(_self.form.pass) : false;
            case "specialCar":
                return !_self.isEmpty("pass") ? _self.atLeastSpecialCarRegEx.test(_self.form.pass) : false;
            case "length":
                return !_self.isEmpty("pass") ? _self.atLeastNineCarRegEx.test(_self.form.pass) : false;
            
        }
    }
    

    this.submit = function () {
        
        _self.sendingFormFlag = true;
        console.log("inscriptionCtrl : submit : ", _self.form);
        inscriptionService.postForm(_self.form).then(function(response){
            
            console.log('authentification success');
            
            // ENREGISTER LES INFORMATIONS UTILES DANS LA SESSION ET CREATION DES COOKIES 
            userService.setSessionStorageAndCookies(response.data);
            window.location = '/mon-espace/accueil';
        }, function(){
            
            console.log('failure');
            _self.form.pass = "";
            _self.form.confirmPass = "";
            _self.sendingFormFlag = false;
        }).finally(function(){
            console.log("finally here !!");
        });
    }
    
    // VERIFICATION MOT DE PASSE 
    this.checkPasswords = function() {
        
        return _self.isEmpty('confirmPass') ? false : (_self.form.pass == _self.form.confirmPass);
    }
    
    
    // VERIFICATION EMAIL
    this.verifyEmail = function() {
        _self.focusEmailFlag = false;
        if(!_self.isEmpty("email")) {
            _self.processFlag = true;
            inscriptionService.checkEmail(_self.form.email).then(function(){
                _self.processFlag = false;
            });
        }
            
    }
    
    // VERIFICATION NUMERO CLIENT
    this.verifyClientNumber = function() {
        _self.focusClientNumberFlag = false;
        if(!_self.isEmpty("clientNumber")) {
            _self.processFlag = true;
            inscriptionService.checkClientNumber(_self.form.clientNumber).then(function(){
                _self.processFlag = false;
            });
        }
            
    }
    
    
    this.setFocusFlag = function(field) {
        
        console.log("focus method : ", field);
        switch(field){
            case 'email':
                _self.focusEmailFlag = true;
                break;
            case 'clientNumber':
                _self.focusClientNumberFlag = true;
                break;
            default:
                _self.focusFlag = true;
                
        }
        inscriptionService.resetFlags(field);
    }
    
    
    this.isEmailExist = function() {
        return inscriptionService.emailExistFlag;
    }
    
    this.isClientNumberNotExist = function() {
        return inscriptionService.clientNumberNotExistFlag;
    }

    
    this.isEmpty = function(field) {
        
        //console.log("here");
        switch(field){
            case "lastName":
                //console.log(_self.form.lastName, angular.isUndefined(_self.form.lastName))
                return angular.isUndefined(_self.form.lastName);
            case "firstName":
                return angular.isUndefined(_self.form.firstName);
            case "pass":
                //console.log("is empty pass : ", _self.form.pass);
                //console.log(angular.isUndefined(_self.form.pass));
                return angular.isUndefined(_self.form.pass) || _self.form.pass == "";
            case "confirmPass":
                //console.log("teste : ", _self.form.confirmPass == "")
                return angular.isUndefined(_self.form.confirmPass) || _self.form.confirmPass == "";
            case "email":
                console.log("test empty email : ", _self.form.email);
                return angular.isUndefined(_self.form.email) || _self.form.email == "";
            case "tel":
                //console.log(_self.form.tel);
                return angular.isUndefined(_self.form.tel);
            case "clientNumber":
                return angular.isUndefined(_self.form.clientNumber);
            case "civility":
                return angular.isUndefined(_self.form.civility);
            case "function":
                return angular.isUndefined(_self.form.function);    
        }
    }
    
    this.setResponse = function (response) {
        console.log(response);
        _self.form.captchaToken = response;
        _self.captchaCheckedFlag = true;
    }

    this.setWidgetId = function (widgetId) {
        _self.widgetId = widgetId;
    }

    this.cbExpiration = function (vcRecaptchaService) {
        vcRecaptchaService.reload(self.widgetId);
    }

}