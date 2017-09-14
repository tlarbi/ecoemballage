var checkSameValue = function(){
  var self = {};
  var appel = "<checkSameValue values-to-test="'valeur'" ng-model='tata'>"
  self.scope = {
      valuesToTest:'='
  };
  self.require = 'ngModel',
  self.link = function(scope, elm, attrs, ctrl){
      ctrl.$validators.integer = function(modelValue, viewValue) {
        values = {
           carton : 'carton',
           papier : ''
        }
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (valueToTest === modelValue) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
  };

  return self;
}


module.exports = checkSameValue;
