sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter", // VIRGULA
	"ovly/aluno00/minhas_compras/model/formatter"
	], function (Controller, Filter, formatter) {
	"use strict";
	return Controller.extend("ovly.aluno00.minhas_compras.controller.S1", {
		
		formatador: formatter,
		
		onInit: function () {},
		onItemPress: function (oEvent) {
			var oParameters = oEvent.getParameters();
			var oListItem = oParameters.listItem;
			// nao tem ( )
			var oHeaderContext = oListItem.getBindingContext();
			var oHeader = oHeaderContext.getObject();
			var sKey = oHeader.PoKey;
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				id: sKey
			});
		},

		onSearch: function (oEvt) {
			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("PoId", sap.ui.model.FilterOperator.StartsWith, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.byId("list");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		}
	});
});