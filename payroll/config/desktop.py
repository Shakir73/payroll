# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"module_name": "Payroll",
			"color": "grey",
			"icon": "octicon octicon-checklist",
			"type": "module",
			"label": _("Payroll")
		}
	]
