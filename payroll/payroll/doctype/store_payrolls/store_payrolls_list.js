frappe.listview_settings['Store Payrolls'] = {
	add_fields: [ "store_payrolls_status"],
	has_indicator_for_draft: 1,
	get_indicator: function(doc) {
		// if (doc.paid) {
		// 	return [__("Paid"), "green", "paid,=,Yes"];
		// }
		if (doc.store_payrolls_status=="Initialized") {
			return [__("Initialized"), "orange", "store_payrolls_status,=,Initialized"];
		}
		else if (doc.store_payrolls_status=="Process") {
			return [__("Process"), "green", "store_payrolls_status,=,Process"];
		}
		else if (doc.store_payrolls_status=="Quality Control") {
			return [__("Quality Control"), "red", "store_payrolls_status,=,Quality Control"];
		}
		else if (doc.store_payrolls_status=="Dispatched") {
			return [__("Dispatched"), "blue", "store_payrolls_status,=,Dispatched"];
		}
	}
};