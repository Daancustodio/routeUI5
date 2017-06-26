sap.ui.define(
	["sap/ui/core/mvc/Controller",
	],
	function (Controller) {
	"use strict";

	return Controller.extend("routeOne.controller.Master", {
				
		onInit : function () {
            
		},		

		onRoutes: function(oEvent){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo('rotas');
		}
		
	});

});