module.exports = function (compteWebResource) {
    
    var _self = this;
   
    
    this.emailExistFlag = false;
    this.clientNumberNotExistFlag = false;
    

    // ENVOIE DU FORMULAIRE D'INSCRIPTION
    this.postForm = function(form) {
        
        console.log("in post method service");
        return compteWebResource.subscribe(form);
    }

    // OBSELETE
    this.getResponse = function() {
    	return _self.response;
    }

    
    // VERIFICATION ADRESSE MAIL
    this.checkEmail = function(mail) {
        
    	console.log(mail);
        
        return compteWebResource.checkEmail(mail).then(function(response){
        
            //on email exist
            console.log(response);
            _self.emailExistFlag = true;
            
        }, function(response){
            
            //on email not exist
            console.log(response);
            _self.emailExistFlag = false;
        });
    }
    
    // VERIFICATION NUMERO CLIENT
    this.checkClientNumber = function(clientNumber) {
        
    	console.log(clientNumber);
        return compteWebResource.checkClientNumber(clientNumber).then(function(response){
            
            //on client number exist
            console.log(response);
            _self.clientNumberNotExistFlag = false;
        }, function(response){
            
            //on client number not exist
            console.log(response);
            _self.clientNumberNotExistFlag = true;
        });
    }
    
    //
    this.resetFlags = function(field) {
        
        switch(field) {
            case 'email':
                _self.emailExistFlag = false;
                break;
            case 'clientNumber':
                _self.clientNumberNotExistFlag = false;
                break;
        }
    }
    return _self;
}