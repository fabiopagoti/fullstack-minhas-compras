/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ovly/aluno00/minhas_compras/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});