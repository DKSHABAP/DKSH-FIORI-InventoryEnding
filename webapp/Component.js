sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "dksh/connectclient/InventoryEnd/model/models", "sap/m/MessageBox"], function (e, t, i, n) {
	"use strict";
	return e.extend("dksh.connectclient.InventoryEnd.Component", {
		metadata: {
			manifest: "json",
			config: {
				fullWidth: true
			}
		},
		init: function () {
			e.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
			this.setModel(i.createDeviceModel(), "device")
		}
	})
});