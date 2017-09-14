module.exports = function($state) {
    
    var _self = this;
    
    this.first = 'step.step1';
    this.finalStep = 2;
    
    this.step = 1;
    

    this.$onInit = function() {
        
        _self.objectTest = {
            test1: "test1",
            test2: 'test2'
        }
    }
    
    
    
    this.next = function(){
        
        console.log('object in navigation', _self.test);
        _self.step++;
        if(_self.step > _self.finalStep)
            _self.step = 1;
        var state = 'step.step' + _self.step;
        console.log('state to go : ', state);
        $state.go(state);
    }
}