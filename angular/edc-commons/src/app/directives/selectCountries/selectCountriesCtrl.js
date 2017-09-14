module.exports = function(userService) {

    var _self = this;

    this.$onInit = function(){
        _self.countries = userService.getCountries();
        //console.log('initialize countries controller : ', _self.countries);
    }
}
