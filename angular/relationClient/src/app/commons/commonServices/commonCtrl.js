module.exports = function(commonServices) {

    var _self = this;

    this.clientNumber = undefined;
    this.clientNumberExistFlag = false;
    this.clientNumberExistInSessionFlag = false;
    this.technicalErrorFlag = false;
    this.focusFlag = false;
    this.processFlag = false;
    this.technicalErrorMessage = '';


    this.closePopup = function() {
            commonServices.controlModal('reject');
    }


    this.addNewClientValidate = function() {

        commonServices.addNewClient(_self.clientNumber).then(function(){

            console.log('add client cntrl : ', commonServices.newClientAddedFlag);
            commonServices.controlModal('resolve');
        }, function (){
            _self.technicalErrorFlag = true;
            _self.technicalErrorMessage = commonServices.technicalErrorMessage;
            console.log('add client ctrl failure technical error : ', _self.technicalErrorFlag);
            console.log('technicalErrorMessage', _self.technicalErrorMessage);
        });
    }

    this.onBlur = function() {

        _self.focusFlag = false;
        _self.processFlag = true;
        console.log('client number in session ? ', commonServices.isClientNumberInSession(_self.clientNumber));
        console.log('client number : ', _self.clientNumber);
        if(_self.clientNumber == undefined){

            _self.processFlag = false;
            return false;
        }

        if(commonServices.isClientNumberInSession(_self.clientNumber)) {

            _self.clientNumberExistInSessionFlag = true;
            _self.processFlag = false;
            return false;
        }

        if(angular.isDefined(_self.clientNumber))
            commonServices.checkClientNumber(_self.clientNumber).then(function(response){

                //on client number exist
                console.log(response);
                _self.clientNumberExistFlag = true;
            }, function(response){

                //on client number not exist
                console.log(response);
                if(response.status != 404)
                    _self.technicalErrorFlag = true;
                _self.clientNumberExistFlag = false;
                _self.technicalErrorMessage = commonServices.getErrorMessage(response.status);
            }).finally(function(){

                _self.processFlag = false;
            });
    }

    this.onFocus = function() {

        _self.focusFlag = true;
        _self.resetFlags();
    }

    this.resetFlags = function() {

        _self.clientNumberExistFlag = false;
        _self.clientNumberExistInSessionFlag = false;
        _self.technicalErrorFlag = false;
        _self.processFlag = false;
    }

    this.isError = function() {
        console.log('is Error technical : ', _self.technicalErrorFlag);
        return !_self.clientNumberExistFlag || _self.clientNumberExistInSessionFlag || _self.technicalErrorFlag || _self.focusFlag || _self.processFlag;
    }

}
