sap.ui.define(
[    
    "routeOne/controller/BaseController",   
], 
function(BaseController){
    "use strict";
    return BaseController.extend("routeOne.controller.Rotas", {
        onInit : function () {            
            console.log("Você está no controller de rotas");
        },
                });
        
    }
    );