function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZOVLY_0_MY_PO_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}