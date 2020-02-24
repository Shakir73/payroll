# -*- coding: utf-8 -*-
# Copyright (c) 2020, Abacus First Solutions and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
import json
from frappe import throw, _
from frappe.utils import cint, getdate, formatdate, today
from frappe.model.document import Document

class StorePayrolls(Document):
	def autoname(self):
		payrolls = frappe.get_list("Store Payrolls",  filters= {"store_name": self.store_name})
		naming_series = f'{self.store_name} -- {len([payroll for payroll in payrolls]) + 1}'
		check_duplicate = frappe.db.sql("""select name from `tabStore Payrolls` where name = %s""", naming_series)
		if check_duplicate:
			self.name = f'{self.store_name} -- {len([payroll for payroll in payrolls]) + 2}'
			self.title = f'{self.store_name} -- {len([payroll for payroll in payrolls]) + 2}'
			
		else:
			self.name = naming_series
			self.title = naming_series
		

	def validate(self):
		self.start_end_dates_validations()
		# self.update_status()


	def start_end_dates_validations(self):
		if self.pay_start_date > self.pay_end_date:
			frappe.throw(_('Pay Start Date must be less than Pay End Date!'))


	def update_status(self):
		"""Updates Store Payrolls status to Process"""
		process = frappe.db.exists("Process Payroll", self.name)
		if process:
			frappe.db.set_value('Store Payrolls', self.name, 'store_payrolls_status', 'Process')
		else:
			frappe.db.set_value('Store Payrolls', self.name, 'store_payrolls_status', 'Initialized')






	# @frappe.whitelist()
	# def process_payroll(self):
	# 	process = frappe.db.sql("""select name from `Process Payroll` where name = %s""", self.name)
	# 	if process:
	# 		return process

# @frappe.whitelist()
# def process_payroll(name):
# 	process = frappe.db.sql("""select name from `Process Payroll` where name = %s""", name)
# 	if process:
# 		return process

@frappe.whitelist()
def get_events(start, end, filters=None):
	"""Returns events for Gantt / Calendar view rendering.

	:param start: Start date-time.
	:param end: End date-time.
	:param filters: Filters (JSON).
	"""
	if filters:
		filters = json.loads(filters)
	else:
		filters = []

	if start:
		filters.append(['Payroll', 'pay_start_date', '>=', getdate(start)])
	if end:
		filters.append(['Payroll', 'pay_end_date', '>', getdate(end)])

	return frappe.get_list('Store Payrolls',
		fields=['name', '`tabStore Payrolls`.pay_start_date', '`tabStore Payrolls`.pay_end_date', '`tabStore Payrolls`.store_name'],
		filters = filters,
		update={"allDay": 1})
