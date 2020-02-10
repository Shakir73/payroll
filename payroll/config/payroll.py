from __future__ import unicode_literals
from frappe import _

def get_data():
    return [
      {
        "label":_("Setup"),
        "icon": "octicon octicon-file-directory",
        "items": [
            {
              "type": "doctype",
              "name": "Scheduled Payroll",
              "onboard": 1,
              "label": _("Scheduled Payroll"),
              "description": _("Articles which members issue and return."),
            },
            {
              "type": "doctype",
              "name": "To Do Exception",
              "onboard": 1,
              "label": _("To Do (Exception) Table for Payroll"),
              "description": _("Articles which members issue and return."),
            },

            # {
            #   "type": "doctype",
            #   "name": "Managing Partner Information",
            #   "label": _("Managing Partner Information"),
            #   "description": _("Articles which members issue and return."),
            # },
            # {
            #   "type": "doctype",
            #   "name": "District Manager",
            #   "label": _("District Manager"),
            #   "description": _("Articles which members issue and return."),
            # },
            # {
            #   "type": "doctype",
            #   "name": "Shift Manager",
            #   "label": _("Shift Manager"),
            #   "description": _("Articles which members issue and return."),
            # },

          ]
      }
  ]
