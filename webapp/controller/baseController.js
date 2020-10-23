sap.ui.define(
	["sap/ui/core/mvc/Controller",
	"firstProject/firstProject/model/models"],
	function(Controller,oModel){
		return Controller.extend("firstProject/firstProject/controller/baseController",
		{
			initiateModels: function()
			{
				var model = oModel.fruitModel();
				var oApp = sap.ui.getCore().byId("idAppV");
				oApp.setModel(model);
			}
		});
	});