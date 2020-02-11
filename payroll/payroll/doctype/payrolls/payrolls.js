// Copyright (c) 2020, Abacus First Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Payrolls', {
	no_of_pay_checks: function(frm) {
		frm.set_value('total_no_of_pay_checks', frm.doc.no_of_direct_deposit + frm.doc.no_of_pay_checks);
	},

	validate: function(frm) {
		if (frm.doc.date < get_today()) {
			frappe.msgprint(__("You can not select past date"));
			frappe.validated = false;
		}
	}
});
