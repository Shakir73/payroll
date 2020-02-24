# -*- coding: utf-8 -*-
# Copyright (c) 2020, Abacus First Solutions and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import throw, _
from frappe.model.document import Document

class ProcessPayroll(Document):
	def validate(self):
		self.checks_validations()
		# self.update_status()

		# self.start_end_dates_validations()
		# self.disptach_section()

	def checks_validations(self):
		if self.no_of_direct_deposit or self.no_of_pay_checks:
			self.total_no_of_pay_checks = self.no_of_direct_deposit + self.no_of_pay_checks
		else:
			self.total_no_of_pay_checks = 0


	def on_submit(self):
		"""Updates Store Payrolls status to Process"""
		frappe.db.set_value('Store Payrolls', self.name, 'store_payrolls_status', 'Process')
		
	def on_cancel(self):
		frappe.db.set_value('Store Payrolls', self.name, 'store_payrolls_status', 'Initialized')

