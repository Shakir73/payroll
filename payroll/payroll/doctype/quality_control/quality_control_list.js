frappe.listview_settings['Quality Control'] = {
	add_fields: [ "qc_status"],
	has_indicator_for_draft: 1,
	get_indicator: function(doc) {
		// if (doc.paid) {
		// 	return [__("Paid"), "green", "paid,=,Yes"];
		// }
		if (doc.qc_status=="Initialized") {
			return [__("Initialized"), "orange", "qc_status,=,Initialized"];
		}
		else if (doc.qc_status=="Process") {
			return [__("Process"), "green", "qc_status,=,Process"];
		}
		else if (doc.qc_status=="Quality Control") {
			return [__("Quality Control"), "red", "qc_status,=,Quality Control"];
		}
		else if (doc.qc_status=="Dispatched") {
			return [__("Dispatched"), "blue", "qc_status,=,Dispatched"];
		}
	}
};