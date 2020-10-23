sap.ui.define([
	"firstProject/firstProject/controller/baseController"
], function (baseController) {
	"use strict";

	return baseController.extend("firstProject.firstProject.controller.AppView", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf firstProject.firstProject.view.AppView
		 */
		onInit: function () {
			this.initiateModels();
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf firstProject.firstProject.view.AppView
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf firstProject.firstProject.view.AppView
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf firstProject.firstProject.view.AppView
		 */
		//	onExit: function() {
		//
		//	}

	});

});