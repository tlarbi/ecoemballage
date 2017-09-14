module.exports = function(popupsService) {

    var _self = this;
    this.messageError = popupsService.messageError;
    this.contributionTotale = popupsService.contributionTotale;


    this.closePopup = function(method) {

        if(method == 'reject')
            popupsService.controlModal('reject');
        else
            popupsService.controlModal('resolve');
    }

}