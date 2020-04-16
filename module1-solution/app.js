( function(){
	'use strict';
  angular.module("LunchCheck",[])
  .controller('LunchCheckController',LunchCheckController);
  	LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
  	$scope.items="";
  	$scope.message="";

  	$scope.LunchCheckFun=function(){
      var input= $scope.items.split(",")
      
  		var result=CheckLunch(input);
        $scope.message=result;
  	};

  	function CheckLunch(array){
      var count=0;
      var i=0;
      for(i=0;i<array.length;i++){
        if(array[i]!=" " && array[i]!=""){
          count+=1;
        }
      }
      if(count==0){
        return "Please enter data first";
      }
  		else if(count<=3){
  			return "Enjoy!";
  		}
		else{
  			return "Too much!";
		}
  	}
    
  
  };
  	

})();