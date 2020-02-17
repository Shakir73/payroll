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
			}
			// else frm.set_value('pay_end_date', '')
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
			}
			// else frm.set_value('pay_start_date', '')
		// }
	},
	time_unit: function(frm) {
		if (frm.doc.time_unit === 'After 1 day') {
			frm.set_value('check_date', frappe.datetime.add_days(get_today(), 1));
		}
		else if (frm.doc.time_unit === 'After 2 days') {
			frm.set_value('check_date', frappe.datetime.add_days(get_today(), 2));
		}
		else if (frm.doc.time_unit === 'After 3 days') {
			frm.set_value('check_date', frappe.datetime.add_days(get_today(), 3));
		}
		else if (frm.doc.time_unit === 'After 4 days') {
			frm.set_value('check_date', frappe.datetime.add_days(get_today(), 4));
		}else if (frm.doc.time_unit === 'After 5 days') {
			frm.set_value('check_date', frappe.datetime.add_days(get_today(), 5));
		}else if (frm.doc.time_unit === 'After 6 days') {
			frm.set_value('check_date', frappe.datetime.add_days(get_today(), 6));
		}else if (frm.doc.time_unit === 'After 7 days') {
			frm.set_value('check_date', frappe.datetime.add_days(get_today(), 7));
		}else if (frm.doc.time_unit === 'Next Sunday') {
			let dayOfWeek = 0;
			let date = new Date(get_today());
			date.setDate(date.getDate() + (7 + dayOfWeek - date.getDay() - 1) % 7 +1);
			frm.set_value('check_date', date)
		}else if (frm.doc.time_unit === 'Next Monday') {
			let dayOfWeek = 1;
			let date = new Date(get_today());
			date.setDate(date.getDate() + (7 + dayOfWeek - date.getDay() - 1) % 7 +1);
			frm.set_value('check_date', date)
		}else if (frm.doc.time_unit === 'Next Tuesday') {
			let dayOfWeek = 2;
			let date = new Date(get_today());
			date.setDate(date.getDate() + (7 + dayOfWeek - date.getDay() - 1) % 7 +1);
			frm.set_value('check_date', date)
		}else if (frm.doc.time_unit === 'Next Wednesday') {
			let dayOfWeek = 3;
			let date = new Date(get_today());
			date.setDate(date.getDate() + (7 + dayOfWeek - date.getDay() - 1) % 7 +1);
			frm.set_value('check_date', date)
		}else if (frm.doc.time_unit === 'Next Thursday') {
			let dayOfWeek = 4;
			let date = new Date(get_today());
			date.setDate(date.getDate() + (7 + dayOfWeek - date.getDay() - 1) % 7 +1);
			frm.set_value('check_date', date)
		}else if (frm.doc.time_unit === 'Next Friday') {
			let dayOfWeek = 5;
			let date = new Date(get_today());
			date.setDate(date.getDate() + (7 + dayOfWeek - date.getDay() - 1) % 7 +1);
			frm.set_value('check_date', date)
		}else if (frm.doc.time_unit === 'Next Saturday') {
			let dayOfWeek = 6;
			let date = new Date(get_today());
			date.setDate(date.getDate() + (7 + dayOfWeek - date.getDay() - 1) % 7 +1);
			frm.set_value('check_date', date)
		}
	},

	// direct_deposit: function(frm) {
	// 	frm.set_df_property('no_of_direct_deposit', 'read_only', (frm.doc.direct_deposit) ? 0 : 1); // see you next time
	// },

	refresh: function(frm) {
		frm.toggle_display("process_payroll_section", frm.doc.status !== 'Initialize');
		frm.toggle_display("qc_payroll_section", frm.doc.status !== 'Initialize' && frm.doc.status !== 'Process');
		frm.toggle_display("dispatch_payroll_section", frm.doc.status !== 'Initialize' && frm.doc.status !== 'Process' && frm.doc.status !== 'QC');
		frm.set_df_property("select_payroll_type", "read_only", frm.doc.status !== 'Initialize');
		frm.set_df_property("store_name", "read_only", frm.doc.status !== 'Initialize');
		frm.set_df_property("date", "read_only", frm.doc.status !== 'Initialize');
		frm.set_df_property("payroll_schedule", "read_only", frm.doc.status !== 'Initialize');
		frm.set_df_property("time_unit", "read_only", frm.doc.status !== 'Initialize');
		frm.set_df_property("pay_start_date", "read_only", frm.doc.status !== 'Initialize');
		frm.set_df_property("pay_end_date", "read_only", frm.doc.status !== 'Initialize');
		frm.set_df_property("check_date", "read_only", frm.doc.status !== 'Initialize');

		frm.set_df_property("direct_deposit", "read_only", frm.doc.status !== 'Process');

		frm.set_df_property("no_of_direct_deposit", "read_only", (frm.doc.status !== 'Process') ? 1 : 0);
		

		frm.set_df_property("no_of_pay_checks", "read_only", frm.doc.status !== 'Process');

		

		frm.set_df_property("No. of Pay Checks", "read_only", frm.doc.status !== 'Process');
		frm.set_df_property("pay_stubs", "read_only", frm.doc.status !== 'Process');
		frm.set_df_property("checks", "read_only", frm.doc.status !== 'Process');
		frm.set_df_property("remarks", "read_only", frm.doc.status !== 'Process');


		frm.set_df_property("abc_check", "read_only", frm.doc.status !== 'QC');
		frm.set_df_property("take_out_the_summary_of_payroll", "read_only", frm.doc.status !== 'QC');
		frm.set_df_property("pay_period_and_check_date", "read_only", frm.doc.status !== 'QC');
		frm.set_df_property("verification_of_employee_name_and_ssn", "read_only", frm.doc.status !== 'QC');
		frm.set_df_property("review_hours_pay_rate__salary", "read_only", frm.doc.status !== 'QC');
		frm.set_df_property("calculate_social_security_and_medicare", "read_only", frm.doc.status !== 'QC');
		frm.set_df_property("state_withholding", "read_only", frm.doc.status !== 'QC');
		frm.set_df_property("child_support_garnishment_tax_lien", "read_only", frm.doc.status !== 'QC');
		frm.set_df_property("total_no_of_paycheckes_and_direct_deposits", "read_only", frm.doc.status !== 'QC');
		frm.set_df_property("process_direct_deposit", "read_only", frm.doc.status !== 'QC');


		frm.set_df_property('print_report', 'reqd', (frm.doc.status === 'Dispatch') ? 1 : 0);
		frm.set_df_property('tracking_no', 'reqd', (frm.doc.status === 'Dispatch') ? 1 : 0);
		frm.set_df_property('mode_of_delivery', 'reqd', (frm.doc.status === 'Dispatch') ? 1 : 0);

	},

	// refresh: function(frm) {
	// 	if (frm.doc.docstatus == 0 && frm.doc.direct_deposit) {
	// 		frm.set_df_property('no_of_direct_deposit', 'read_only', 0);
	// 	} else {
	// 		frm.set_df_property('no_of_direct_deposit', 'read_only', 1);
	// 	}
	// }
});
