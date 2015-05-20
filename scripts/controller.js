var app = angular.module("test", ['customDirective']);

app.controller("DirectiveController", ['$scope', function ($scope) {
	$scope.a = 2;
	$scope.b = 3;
	$scope.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
