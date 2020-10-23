sap.ui.define([
	"firstProject/firstProject/controller/baseController",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"firstProject/firstProject/formatter/SupplierFormatter"
], function (baseController,messageBox, messageToast,supFrmt) {
	
	return baseController.extend("firstProject.firstProject.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf firstProject.firstProject.view.View2
		 */
		 format:supFrmt,

		onInit: function () {
			this.initiateModels();
			var first = this.getView().byId("item1");
			first.bindElement("/Suppliers/0");

		},
		onBack: function(){
			var oV2 = this.getView().getParent().getParent().getDetailPages()[0];
			oV2.to("idV1");
		},
		 detail: " ",
		onAccept: function(){
			this.detail = this.getView().byId("itemHeader").getProperty("title");
			var that = this;
			messageBox.confirm("Are you sure you want to select this fruit",
			{
				onClose: function(oEvt)
				{
					if(oEvt === 'OK'){
						messageToast.show("Thanks for Confirming as Yes to " + that.detail);}
				}
			});
		},
		onFilterSelect: function(){
			var test = this.getView().byId("item4").getAggregation("content")[0];
			test.bindElement("address/0");
			var test1 = this.getView().byId("item4").getAggregation("content")[1];
			test1.bindElement("address/1");
		},
		onSuplSelection: function(oEvt){
			var oV3 = this.getView().getParent().getParent().getDetailPages()[1];
			var oAppV = this.getView().getParent().getParent();
			oAppV.toDetail(oV3);
			var sQuery = oEvt.getSource("argument").getBindingContextPath();
			oV3.bindContext(sQuery);
		//	oAppV.placeAt("content");
		},
		onFilter: function(oEvt){
			this.cellId = oEvt.getSource().getId();
			var cityFrag = new sap.ui.xmlfragment("firstProject.firstProject.fragments.city",this);
			this.getView().addDependent(cityFrag);
			cityFrag.bindAggregation("items",
			{
				path: "/City",
				template: new sap.m.StandardListItem(
					{
						description: "{State}",
						title: "{Name}"
					})
			});
			cityFrag.open();
		},
		onConfirm: function(oEvt){
			var value = oEvt.getParameter("selectedItem").getProperty("title");
			var inputKey = sap.ui.getCore().byId(this.cellId);
			inputKey.setValue(value);
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf firstProject.firstProject.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf firstProject.firstProject.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf firstProject.firstProject.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});