frappe.listview_settings['Process Payroll'] = {
	add_fields: [ "process_status"],
	has_indicator_for_draft: 1,
	get_indicator: function(doc) {
		if (doc.process_status=="Initialized") {
			return [__("Initialized"), "orange", "process_status,=,Initialized"];
		}
		else if (doc.process_status=="Process") {
			return [__("Process"), "green", "process_status,=,Process"];
		}
		else if (doc.process_status=="Quality Control") {
			return [__("Quality Control"), "red", "process_status,=,Quality Control"];
		}
		else if (doc.process_status=="Dispatched") {
			return [__("Dispatched"), "blue", "process_status,=,Dispatched"];
		}
	}
};