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
	},

	pay_start_date: function(frm) {
	// 	if (frm.doc.pay_start_date !== "") {
			// Days
			if (frm.doc.payroll_schedule === 'Weekly') {
				frm.set_value('pay_end_date', frappe.datetime.add_days(frm.doc.pay_start_date , 7));
			} else if (frm.doc.payroll_schedule === 'Biweekly') {
				frm.set_value('pay_end_date', frappe.datetime.add_days(frm.doc.pay_start_date , 14));
			}else if (frm.doc.payroll_schedule === 'Semi-Monthly') {
				frm.set_value('pay_end_date', frappe.datetime.add_days(frm.doc.pay_start_date , 15));
			}
			
			// Months
			
			else if (frm.doc.payroll_schedule === 'Monthly') {
				frm.set_value('pay_end_date', frappe.datetime.add_months(frm.doc.pay_start_date , 1));
			}else if (frm.doc.payroll_schedule === 'Quarterly') {
				frm.set_value('pay_end_date', frappe.datetime.add_months(frm.doc.pay_start_date , 3));
			}else if (frm.doc.payroll_schedule === 'Trio-Yearly') {
				frm.set_value('pay_end_date', frappe.datetime.add_months(frm.doc.pay_start_date , 4));
			}else if (frm.doc.payroll_schedule === 'Half-Yearly') {
				frm.set_value('pay_end_date', frappe.datetime.add_months(frm.doc.pay_start_date , 6));
			}else if (frm.doc.payroll_schedule === 'Yearly') {
				frm.set_value('pay_end_date', frappe.datetime.add_months(frm.doc.pay_start_date , 12));
			}else frm.set_value('pay_end_date', '')
		// }
	},

	pay_end_date: function(frm) {
		
		// // if (frm.doc.pay_start_date === "") {
		// 	// Days
			if (frm.doc.payroll_schedule === 'Weekly') {
				frm.set_value('pay_start_date', frappe.datetime.add_days(frm.doc.pay_end_date , -7));
			} else if (frm.doc.payroll_schedule === 'Biweekly') {
				frm.set_value('pay_start_date', frappe.datetime.add_days(frm.doc.pay_end_date , -14));
			}else if (frm.doc.payroll_schedule === 'Semi-Monthly') {
				frm.set_value('pay_start_date', frappe.datetime.add_days(frm.doc.pay_end_date , -15));
			}else if (frm.doc.payroll_schedule === 'Monthly') {
				frm.set_value('pay_start_date', frappe.datetime.add_months(frm.doc.pay_end_date , -1));
			}
			
			// Months
			
			else if (frm.doc.payroll_schedule === 'Quarterly') {
				frm.set_value('pay_start_date', frappe.datetime.add_months(frm.doc.pay_end_date , -3));
			}else if (frm.doc.payroll_schedule === 'Trio-Yearly') {
				frm.set_value('pay_start_date', frappe.datetime.add_months(frm.doc.pay_end_date , -4));
			}else if (frm.doc.payroll_schedule === 'Half-Yearly') {
				frm.set_value('pay_start_date', frappe.datetime.add_months(frm.doc.pay_end_date , -6));
			}else if (frm.doc.payroll_schedule === 'Yearly') {
				frm.set_value('pay_start_date', frappe.datetime.add_months(frm.doc.pay_end_date , -12));
			}else frm.set_value('pay_start_date', '')
		// }
	},
});
