var superb = require('superb');
var request = require('request');

module.exports = function(args) {
	var base = 'http://test@liferay.com:test@localhost:8080/api/jsonws';
	var action = '/role/get-role';
	var url = base + action;

	function getRole() {
		var role = {
			roleId: args.id || args.i
		};

		var postData = {
			url: url,
			form: role
		};

		request.post(
			{
				url: url,
				form: role
			},
			callback
		);
	}

	function callback(error, response, body) {
		if (!error && (response.statusCode == 200)) {
			var role = JSON.parse(body);

			console.log('ROLE: ', role);
		}
		else {
			console.log('Something went wrong...');
			console.log('STATUS CODE: ', response.statusCode);
			console.log('ERROR: ', error);
		}
	}

	getRole();
}