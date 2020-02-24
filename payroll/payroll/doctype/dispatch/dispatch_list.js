frappe.listview_settings['Dispatch'] = {
	add_fields: [ "dispatch_status"],
	has_indicator_for_draft: 1,
	get_indicator: function(doc) {
		// if (doc.paid) {
		// 	return [__("Paid"), "green", "paid,=,Yes"];
		// }
		if (doc.dispatch_status=="Initialized") {
			return [__("Initialized"), "orange", "dispatch_status,=,Initialized"];
		}
		else if (doc.dispatch_status=="Initialized") {
			return [__("Initialized"), "orange", "dispatch_status,=,Initialized"];
		}
		else if (doc.dispatch_status=="Process") {
			return [__("Process"), "green", "dispatch_status,=,Process"];
		}
		else if (doc.dispatch_status=="Quality Control") {
			return [__("Quality Control"), "red", "dispatch_status,=,Quality Control"];
		}
		else if (doc.dispatch_status=="Dispatched") {
			return [__("Dispatched"), "blue", "dispatch_status,=,Dispatched"];
		}
	}
};