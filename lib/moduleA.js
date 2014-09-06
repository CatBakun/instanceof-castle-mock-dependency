define([
    'moduleB',
    'moduleC'
], function(
    ModuleB,
    ModuleC
){
    
    return {
        doesInstanceofWorks: function(){
            return ModuleB.getModuleCInstance() instanceof ModuleC;
        },
        doesDuckTypeWorks: function(){
            return ModuleB.getModuleCInstance().isModuleCInstance();
        }
    }
    
})
