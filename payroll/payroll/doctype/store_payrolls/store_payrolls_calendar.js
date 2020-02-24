frappe.views.calendar["Store Payrolls"] = {
	field_map: {
		"start": "pay_start_date",
		"end": "pay_end_date",
		"id": "name",
		"allDay": "allDay"
	},
	get_events_method: "payroll.payroll.doctype.store_payrolls.store_payrolls.get_events",
	filters: [
		{
			'fieldtype': 'Link',
			'fieldname': 'store_payrolls',
			'options': 'Store Payrolls',
			'label': __('Store Payrolls')
		}
	]
}
