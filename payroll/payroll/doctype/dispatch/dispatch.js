// Copyright (c) 2020, Abacus First Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Dispatch', {
	on_submit: function(frm) {
		frappe.set_route('Form', 'Store Payrolls', frm.doc.name);
	}
});
