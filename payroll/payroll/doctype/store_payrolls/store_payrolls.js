// Copyright (c) 2020, Abacus First Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Store Payrolls', {
// refresh: function(frm) {
// 	frappe.call({
// 		method:"payroll.payroll.doctype.store_payrolls.store_payrolls.process_payroll",
// 		args: {
// 			"dt": frm.doc.name,
// 		},
// 		callback: function(r) {
// 			if(!r.exc){
				
// 			}
// 		}
// 	});
// },
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
});
