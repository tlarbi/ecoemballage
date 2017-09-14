module.exports = function($http) {
    
    var _self = this;
    
    this.resp = {};
    
    this.postData = function(Url, Data) {
        
        return $http({
            
            method: 'POST',
            url: Url,
            data: Data
        }).then(function(response){
            
            console.log("request Post : success");
            _self.resp = response;
        }, function(response){
            
            console.log("request Post : failure");
            _self.resp = response;
        });
    }
    
    this.getResponse = function() {
        return _self.resp;
    }
    
    return this;
}