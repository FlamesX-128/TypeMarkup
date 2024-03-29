// Pure TypeMarkup
* html - lang 'en' html

& html head
	- charset 'utf-8'
	meta

	- http-equiv 'X-UA-Compatible'
	- content 'IE=edge'
	meta

	- content 'width=device-width, initial-scale=1.0'
	- name 'viewport'
	meta

& html body div
	'force insert'

// Impure TypeMarkup
* html - lang 'en' html

& html head {
	- charset 'utf-8'
	meta

	- http-equiv 'X-UA-Compatible'
	- content 'IE=edge'
	meta

	- content 'width=device-width, initial-scale=1.0'
	- name 'viewport'
	meta
}

& html * html body  div {
	'force insert'
}
