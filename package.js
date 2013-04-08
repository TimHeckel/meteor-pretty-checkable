Package.describe({
	summary: "A jQuery plugin to replace checkboxes and radios for custom images"
});

Package.on_use(function (api) {
	api.use('jquery', 'client');
	api.add_files([
		'lib/prettyCheckable.js'
		,'lib/prettyCheckable.css'
		,'lib/prettyCheckable-blue.png'
		,'lib/prettyCheckable-green.png'
		,'lib/prettyCheckable-red.png'
		,'lib/prettyCheckable-yellow.png'
	], 'client');
});
