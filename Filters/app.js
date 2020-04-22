(function(){
	'use strict';
	angular.module("FiltersApp",[])
	.controller('filterController',filterController)
	.filter('custom',CustomFilter);
	
	filterController.$inject=["$scope",'$filter',"customFilter"];
	
	function filterController($scope,$filter ,customFilter){
		$scope.name=""
		$scope.msg=""
		$scope.filters= function(){
		$scope.msg= customFilter($scope.name)
		$scope.msg = $filter('uppercase')($scope.msg);
		};

		
		}
		
	
	function CustomFilter(){
			return function(input){
				input = input+ " Manohar"
				return input;
			};
		}

		
	
	
})();