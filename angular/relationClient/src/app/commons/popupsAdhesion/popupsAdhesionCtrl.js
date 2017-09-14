module.exports = function(popupsAdhesionService,$userService) {

    var _self = this;

    this.sign = function() {

        _self.sendingFormFlag = true;
        popupsAdhesionService.sign().then(function(){

            _self.flags = popupsAdhesionService.flags;
            _self.sendingFormFlag = false;
            console.log('popup controller setting flags : ', _self.flags);
        });
    }

    this.closePopup = function(method) {

        if(method == 'reject')
            popupsAdhesionService.controlModal('reject');
        else
            popupsAdhesionService.controlModal('resolve');
    }



    this.technicalErrorFlag = popupsAdhesionService.technicalErrorFlag;

    this.invalidCodeFlag = popupsAdhesionService.invalidCodeFlag;
}
