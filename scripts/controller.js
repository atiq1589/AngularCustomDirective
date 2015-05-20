var app = angular.module("test", ['customDirective']);

app.controller("DirectiveController", ['$scope', function ($scope) {
	$scope.a = 2;
	$scope.b = 3;
	$scope.list = [1, 2];
	$scope.ASD = { a: "ASD" };
	$scope.popup = function (d) {
		alert(d);
	};
	$scope.ComplexData = {
		func: function (d) {
			alert(d);
		},
		name: "Md. Atiqul Islam"
	}
}]);
