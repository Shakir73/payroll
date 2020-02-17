# -*- coding: utf-8 -*-
# Copyright (c) 2020, Abacus First Solutions and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import throw, _
from frappe.model.document import Document

class Payrolls(Document):
	def validate(self):
		self.checks_validations()
		self.start_end_dates_validations()
		# self.disptach_section()

	def checks_validations(self):
		if self.no_of_direct_deposit or self.no_of_pay_checks:
			self.total_no_of_pay_checks = self.no_of_direct_deposit + self.no_of_pay_checks
		else:
			self.total_no_of_pay_checks = 0


	def start_end_dates_validations(self):
		if self.pay_start_date > self.pay_end_date:
			frappe.throw(_('Pay Start Date must be less than Pay End Date!'))

	def on_submit(self):
		if self.status == 'Finalized' and self.print_report == '':
			frappe.throw(_('Print Report field should not be blank'))
		elif self.status == 'Finalized' and self.tracking_no == '':
			frappe.throw(_('Tracking No field should not be blank'))
		elif self.status == 'Finalized' and self.mode_of_delivery == '':
			frappe.throw(_('Mode of Delivery field should not be blank'))

