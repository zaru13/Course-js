(function() {
"use strict";

angular.module("LunchCheck",[])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"]

function LunchCheckController ($scope) {
	$scope.message = "";
	$scope.menu = "" ;
	$scope.checkLunch = function () {
		var menu_array = $scope.menu.split(',');
	
		if ($scope.menu == "") {
			$scope.message = "Please enter data first"
		} else if (menu_array.length <=3 ) {
			$scope.message = "Enjoy!" ;
		} else {
			$scope.message = "Too much!";
		}
	}
}	

})();


