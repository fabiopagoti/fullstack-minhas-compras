sap.ui.define([], function () {
	"use strict";

	return {

		toUpperCase: function (sSupplierName) {
			if (!sSupplierName) {
				return "";
			}
			return sSupplierName.toUpperCase();
		},

		calcQuantity: function (Price, Total) {
			if (Price && Total) {
				return ( Total / Price ).toFixed(2);
			} else {
				return "";
			}
		}	

	};

});