module.exports = function(oubliMotDePasseService, commonServices) {
    
    var _self = this;
    
    this.$onInit = function(){
        
        // Expressions régulière pour les différents controls 
        _self.emailRegEx = commonServices.getRegExList('email');
    }
    
    
    this.form = {email: undefined};
    
    this.urlHome = '/login#?mail=#email#';
    
    this.emailNotExistFlag = false;
    this.focusFlag = false;
    this.processFlag = false;
    this.technicalErrorFlag = false;
    this.formValidateFlag = false;
    this.nextPageFlag = false;
    
    this.onFocus = function() {
        
        _self.focusFlag = true;
        _self.technicalErrorFlag = false;
        _self.emailNotExistFlag = false;
        _self.formValidateFlag = false;
        
    }
    
    this.onBlur = function() {
        
        //_self.focusFlag = false;
        //_self.processFlag = true;
        /*
        if(angular.isDefined(_self.form.email) && _self.form.email.match(_self.emailRegEx) != null)
            oubliMotDePasseService.checkEmail(_self.form.email).then(function(response){

                console.log('check email success : ', response);

            }, function(response){

                console.log('check email failure : ', response);
                if(response.status == 404)
                    _self.emailNotExistFlag = true;
                else
                    _self.technicalErrorFlag = true;

            }).finally(function(){

                _self.processFlag = false;
            });
        */
    }
    
    this.checkFlags = function() {
        
            return _self.technicalErrorFlag || _self.emailNotExistFlag || _self.focusFlag || _self.processFlag;
    }
    
    this.checkEmail = function() {
        
        
            
            return oubliMotDePasseService.checkEmail(_self.form.email).then(function(response){

                console.log('check email success : ', response);
                
                
            }, function(response){

                console.log('check email failure : ', response);
                if(response.status == 404)
                    _self.emailNotExistFlag = true;
                else
                    _self.technicalErrorFlag = true;
            });
    }
    
    
    this.submit = function(){
        
        if(angular.isDefined(_self.form.email) && _self.form.email.match(_self.emailRegEx) != null)
            _self.checkEmail().then(function(){
                
                if(!_self.emailNotExistFlag && !_self.technicalErrorFlag)
                    oubliMotDePasseService.resetPassword(_self.form.email).then(function(response){

                        console.log('reset password request sent successfully', response);
                        _self.nextPageFlag = true;

                    }, function(){
                        _self.technicalErrorFlag = true;

                    });

            }).finally(function(){

                    _self.formValidateFlag = true;    
            });
        else
            _self.formValidateFlag = true;
        
    }
    
    this.next = function(){
        
        window.location = _self.urlHome.replace('#email#', _self.form.email);
    }
    
}