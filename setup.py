# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in payroll/__init__.py
from payroll import __version__ as version

setup(
	name='payroll',
	version=version,
	description='Abacus First Solutions Payroll Module',
	author='Abacus First Solutions',
	author_email='shakir.byco@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
