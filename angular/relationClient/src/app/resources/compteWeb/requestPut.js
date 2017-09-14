module.exports = function ($http) {
    var _self = this;

    _self.response = {};

    _self.putData = function (url, data) {
        return $http({
            method: 'PUT',
            url: url,
            data: data
        }).then(function (response) {
            _self.response = response;
        }, function (response) {
            _self.response = response;
        });
    }

    _self.getResponse = function () {
        return _self.response;
    }

    return _self;
}
