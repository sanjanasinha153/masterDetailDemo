sap.ui.define(
	[],
	function () {

		return {
			statusFormat: function (type) {
				switch (type) {
					case "Registered": return "Success";
					case "Not Registered": return "Warning";
					case "Out of Business": return "Error";
					default: return type;
				}
			}
		};
	});