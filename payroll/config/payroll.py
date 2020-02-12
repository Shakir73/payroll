from __future__ import unicode_literals
from frappe import _

def get_data():
    return [
      {
        "label":_(""),
        "icon": "octicon octicon-file-directory",
        "items": [
            {
              "type": "doctype",
              "name": "Payrolls",
              "onboard": 1,
              "label": _("Scheduled / Unscheduled Payrolls"),
              "description": _("Articles which members issue and return."),
            }

          ]
      }
  ]
