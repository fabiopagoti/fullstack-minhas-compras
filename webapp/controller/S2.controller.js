sap.ui.define([
	"sap/ui/core/mvc/Controller", // VIRGULA
	"hayamax/aluno0/minhas_compras/model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("hayamax.aluno0.minhas_compras.controller.S2", {

		formatador: formatter,

		onInit: function () {

			this.getOwnerComponent()
				.getRouter()
				.getRoute("detail")
				.attachPatternMatched(this.onPatternMatched, this);
		},

		onPatternMatched: function (oEvent) {
			var oParameters = oEvent.getParameters();
			var oArguments = oParameters.arguments; // sem ( )
			var sPoKey = oArguments.id; // parametro da rota (manifest.json e navTo)

			var oDataModel = this.getOwnerComponent().getModel();

			var that = this;
			oDataModel.metadataLoaded().then(function () {

				var sPath = oDataModel.createKey("Headers", {
					PoKey: sPoKey
				});

				// @type sap.ui.core.mvc.View
				var oView = that.getView();
				oView.bindElement("/" + sPath);

			});
		}

	});

});