(function(){
	'use strict';
	angular.module("ShoppingListCheckOff",[])
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.controller('ToBuyController',ToBuyController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService)
	
	ToBuyController.$inject=['ShoppingListCheckOffService']
	function ToBuyController(ShoppingListCheckOffService){
		var buy = this;
		buy.To_buy = ShoppingListCheckOffService.getItems();
		
		buy.Bought = function(itemIndex){
		ShoppingListCheckOffService.Bought(itemIndex);
	};
}
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
    	var show = this;
    	show.bought = ShoppingListCheckOffService.getItemsInBought();
    }

	function ShoppingListCheckOffService(){
		var ser= this;
		var bought =[];
		
		var To_buy=[];
		for(var i =0;i<5;i++){
			var t= {
			name:"cookies",
			quantity:10
		    };
			To_buy.push(t);
		};
		console.log(To_buy);
		ser.addItem = function(itemName,itemQuantity){
			var item = {
				name: itemName,
				quantity : itemQuantity

			};
			bought.push(item);
		}
		ser.Bought = function(itemIndex){
			bought.push(To_buy[itemIndex]);
			To_buy.splice(itemIndex,1);
		}
		ser.getItems = function(){
			return To_buy;
		}
		ser.getItemsInBought = function(){
			return bought;
		}
	}

})();