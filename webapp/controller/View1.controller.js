sap.ui.define([
	"firstProject/firstProject/controller/baseController"
], function (baseController,messageBox) {

	return baseController.extend("firstProject.firstProject.controller.View1", {
		onInit: function () {
/*			this.initiateModels();
            var oList = this.getView().byId("idList2");
            oList.bindItems({
            	path: "/Fruits",
            	template: new sap.m.DisplayListItem(
            		{
            			value: "{name}",
            			label: "{type}"
            		})
            		});*/
		},
		onViewClick: function() {
			var oV1 = this.getView().getParent();
			oV1.to("idV2");
		},
		onSearch: function(oEvt){
			var sQuery = oEvt.getSource().getValue();
			var oFilter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, sQuery);
			var oFilter1 = new sap.ui.model.Filter("type", sap.ui.model.FilterOperator.Contains, sQuery);
			var multiFilter = new sap.ui.model.Filter({
				filters: [oFilter,oFilter1],
				and:false });
			var aFilter = [multiFilter];
			var oList = this.getView().byId("idList");
			oList.getBinding("items").filter(aFilter);
		},
		onItemPress: function(oEvt){
			var sQuery = oEvt.getParameter("listItem").getBindingContextPath();
			var oView2 = this.getView().getParent().getParent().getDetailPages()[0];
			oView2.bindElement(sQuery);
		//	this.onViewClick();
		},
		onPress: function(oEvt){
						var cityFrag = new sap.ui.xmlfragment("firstProject.firstProject.fragments.city");
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
		}
	});
});