sap.ui.define(
[
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], 
function(Controller, History){
    "use strict";
    return Controller.extend("routeOne.controller.Rotas", {
        onInit : function () {            
            console.log("Você está no controller de rotas");
        },
                });
        
    }
    );