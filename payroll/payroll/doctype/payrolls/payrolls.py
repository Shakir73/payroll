# -*- coding: utf-8 -*-
# Copyright (c) 2020, Abacus First Solutions and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
# import frappe
from frappe.model.document import Document

class Payrolls(Document):
	def validate(self):
		if self.no_of_direct_deposit or self.no_of_pay_checks:
			self.total_no_of_pay_checks = self.no_of_direct_deposit + self.no_of_pay_checks
		else:
			self.total_no_of_pay_checks = 0

