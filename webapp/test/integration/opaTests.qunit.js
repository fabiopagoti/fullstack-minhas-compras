/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"hayamax/aluno0/minhas_compras/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});