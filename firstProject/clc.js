(function () {
	angular.module("myReverse",[])
	.controller('nameReverseController',function($scope){
	
	 $scope.name="";
	 $scope.reverseName="";

    $scope.display=function(){
    	var result= reverseName($scope.name);
    	$scope.reverseName=result;

    };
    function reverseName(string){
    	var answer="";
    	for(var i= string.length-1;i>=0;i--){
    		answer+=string.charAt(i);

    	}
    	return answer;

    }
});
	})();

