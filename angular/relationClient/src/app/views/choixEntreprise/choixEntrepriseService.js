module.exports = function(userService, commonServices) {
    
    var _self = this;
    
    this.getUserInfo = function() {

        var user = userService.getUser(); // RECIPERER L'OBJET USER INFO STOCKE EN SESSION
        return user;
    }
    this.getClients = function() {
        var clients = userService.getListClients();
        return clients;
    }

    this.goHome = function(client) {
        commonServices.goHome(client);
    }

    this.addClient = function() {
        return commonServices.openAddNewClientPopup();
    }

    return this;
}
