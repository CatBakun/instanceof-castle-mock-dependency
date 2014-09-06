define([
    'moduleC'
], function(
    ModuleC
){
    return {
        getModuleCInstance: function(){
            return new ModuleC();
        }
    }
});
