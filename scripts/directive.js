
var app = angular.module("customDirective", []);

app.directive('product', function () {
	var directive = {};
	directive.restrict = 'E';
	directive.templateUrl = "ngProductSize.html";

	directive.controller = function ($scope) {
		$scope.click = function (d) {
			alert(d);
			$scope.func({param: 10*d});
		};
	}
	directive.scope = {
		data: '=data',
		func: "&callback"
	};
	directive.compile = function (ele, attr) {
		var linkFunction = function name($scope, ele, attr) {

		};
		return linkFunction;
	};
	return directive;

});

app.directive('complex', function () {
	var directive = {};
	directive.restrict = 'E';
	directive.templateUrl = "complex.html";

	directive.scope = {
		data: '=data'
	};
	directive.compile = function (ele, attr) {
		var linkFunction = function name($scope, ele, attr) {

		};
		return linkFunction;
	};
	return directive;

});
