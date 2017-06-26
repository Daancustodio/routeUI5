sap.ui.define(
[
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], 
function(Controller, History    ){
    "use strict";
    return Controller.extend("routeOne.controller.Rotas", {
        onInit : function () {
            this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            console.log("Você está no controller de rotas");
        },
        
        onNavPress: function() {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();
            if (sPreviousHash !== undefined) {
                // history contains a previous entry
                window.history.go(-1);
            } else {
                this._oRouter.navTo("master");
            }}
        });
        
    }
    );