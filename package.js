Package.describe({
	version: "0.0.3"
	, name: "mrt:pretty-checkable"
	, summary: "A jQuery plugin to replace checkboxes and radios for custom images"
});

Package.on_use(function (api) {
	api.use('jquery@1.11.3', 'client');
	api.add_files([
		'lib/prettyCheckable.js'
		,'lib/prettyCheckable.css'
		,'lib/prettyCheckable-blue.png'
		,'lib/prettyCheckable-green.png'
		,'lib/prettyCheckable-red.png'
		,'lib/prettyCheckable-yellow.png'
	], 'client');
});
