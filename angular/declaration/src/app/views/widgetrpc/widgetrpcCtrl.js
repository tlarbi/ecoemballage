module.exports = function (widgetrpcService, userService) {
    var _self = this;
    const INITIAL_ID = 'block-bloc-4-declaration-faq-declaration';
    const RPC_ID = 'bloc-widgetrpc-modified';
    const FAQ_ID = 'bloc-widgetfaq-modified';
    const ADELPHE_ORGA = 'adelphe';
    const POINTER_CLASS = 'pointer';
    const RPC_NAVIGATE = '/mon-espace/declaration/documents/rpc';
    
    //this.user = widgetrpcService.getUserInfo();

    //this.listdeclarations = [];

    //var idClient="539F732E-33CC-4F72-842A-004D5927ADF0";

    //this.test= "4648";
    var _self = this;

    this.$onInit = function () {

        //var d = new Date();
        //_self.annee_en_cours = d.getFullYear();

        //changeId(INITIAL_ID, MODIFIED_ID);
        if(userService.getOrgaCommerciale() == ADELPHE_ORGA)
            _self.adelpheContextFlag = true;
        else
            _self.ecoContextFlag = true;
        
        console.log('on Init widget rpc !!');
        widgetrpcService.checkRPC().then(function(){
            
            _self.runRpcFlag = widgetrpcService.runRpcFlag;
            changeBackground(_self.runRpcFlag);
            _self.faqFlag = !_self.runRpcFlag;
            console.log('rpc widget controller flag : ', _self.runRpcFlag);
        });
    

    };

    var changeBackground = function(isRpc){
        
        if(isRpc)
            changeId(INITIAL_ID, RPC_ID, isRpc);
        else
            changeId(INITIAL_ID, FAQ_ID);
        
    }
    
    var changeId = function(first, second, isRpc) {
        
        var elem = document.getElementById(first);
        if(elem)
            elem.id = second;
        
        if(isRpc) {
            elem.classList.add(POINTER_CLASS);
            elem.onclick = function(){window.location = RPC_NAVIGATE;};
        }
    }



};