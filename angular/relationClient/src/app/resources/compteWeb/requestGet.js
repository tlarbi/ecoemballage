module.exports = function($http) {
    
    var _self = this;
    
    this.resp = {};
    
    this.getData = function(Url, parameters) {
        
        return $http({
            
            method: 'GET',
            url: Url,
            params: parameters
        }).then(function(response){
            console.log("success");
            //console.log(response);
            _self.resp = response;
            
        }, function(response){
            console.log("failure");
            //console.log(response);
            _self.resp = response;
        });
    }
    
    this.getResponse = function() {
        return _self.resp;
    }
    
    return this;
}