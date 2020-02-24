# -*- coding: utf-8 -*-
# Copyright (c) 2020, Abacus First Solutions and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.model.document import Document

class QualityControl(Document):
	def validate(self):
		process = frappe.get_list("Process Payroll",  filters= {"store_name": self.name})
		if not process:
			frappe.throw(_('QC comes after Process Payroll'))
			
	def on_submit(self):
		"""Updates Store Payrolls status to Quality Control"""
		frappe.db.set_value('Store Payrolls', self.name, 'store_payrolls_status', 'Quality Control')
		
	def on_cancel(self):
		frappe.db.set_value('Store Payrolls', self.name, 'store_payrolls_status', 'Process')

