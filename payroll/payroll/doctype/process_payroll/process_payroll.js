// Copyright (c) 2020, Abacus First Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Process Payroll', {
	no_of_pay_checks: function(frm) {
		frm.set_value('total_no_of_pay_checks', frm.doc.no_of_direct_deposit + frm.doc.no_of_pay_checks);
	},

	on_submit: function(frm) {
		frappe.set_route('Form', 'Store Payrolls', frm.doc.name);
	},
});