sap.ui.define([
"sap/ui/core/UIComponent"
], 
function (UIComponent) {
	"use strict";
	
	return UIComponent.extend("routeOne.Component", {
				
		metadata : {
			manifest: "json"
		},
		
		init : function () {    
			UIComponent.prototype.init.apply(this, arguments);			
			this.getRouter().initialize();
		},
		
		createContent : function() {
			// call the base component's createContent function
			var oRootView = UIComponent.prototype.createContent.apply(this, arguments);
			return oRootView;
		}
	});
});