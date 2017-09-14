module.exports = function(resourceService) {

    var _self = this;

    var amountRegEx = /^\d{1,8}((\.|,)\d{1,2})?$/;
    var codeRegEx = /^\d{4}$/;
    var telRegEx = /^(\+[1-9]{3}|0[1-9])([\s]?\d{2}){4}$/;

    const TECHNICAL_ERROR_CODE = 4;

    this.isValidAmount = function(amount) {

        return angular.isUndefined(amount) || !amount || amountRegEx.test(amount);
    }

    this.isValidActivationCode = function(code) {

        return angular.isUndefined(code) || !code || codeRegEx.test(code);
    }

    this.isValidTel = function(tel) {

        return angular.isUndefined(tel) || !tel || telRegEx.test(tel);
    }

    this.checkCode = function(codeValue, id) {

        var form = {
            Code: codeValue,
            TraceId: id
        };

        console.log('send code to check : ', form);

        return resourceService.checkCodeValidity(form).then(function(response){
            console.log('check code success : ', response);
            _self.statusCode = response.data.StatusCode;
            console.log('status code : ', _self.statusCode);
        }, function(response){
            console.log('ckeck code failure : ', response);
            _self.statusCode = TECHNICAL_ERROR_CODE;
        });
    }

    return this;
}
