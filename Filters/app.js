(function(){
	'use strict';
	angular.module("FiltersApp",[])
	.controller('filterController',filterController);
	
	filterController.$inject=["$scope","$filter"];
	
	function filterController($scope,$filter){
		$scope.name="";
		$scope.msg="";
		$scope.filters= function(){
		$scope.name= $filter('uppercase')($scope.name);
		}
		
	}

		
	
	
})();