sap.ui.define(
	["routeOne/controller/BaseController",
	],
	function (BaseController) {
	"use strict";

	return BaseController.extend("routeOne.controller.Master", {
				
		onInit : function () {
            
		},		

		onRoutes: function(oEvent){
			this.getRouter().navTo('rotas');
		}
		
	});

});