# -*- coding: utf-8 -*-
# Copyright (c) 2020, Abacus First Solutions and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.model.document import Document

class Dispatch(Document):
	def validate(self):
		dispatch = frappe.get_list("Quality Control",  filters= {"store_name": self.name})
		if not dispatch:
			frappe.throw(_('Dispatch comes after Quality Control'))


	def on_submit(self):
		"""Updates Store Payrolls status to Quality Control"""
		frappe.db.set_value('Store Payrolls', self.name, 'store_payrolls_status', 'Dispatched')
		
	def on_cancel(self):
		frappe.db.set_value('Store Payrolls', self.name, 'store_payrolls_status', 'Quality Control')
