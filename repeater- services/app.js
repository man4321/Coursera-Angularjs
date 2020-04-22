(function(){
	'use strict';
 angular.module("myApp",[])
 .controller('shopingADD', shopingADD)
 .controller('shopingView',shopingView)
 .service('shopingService',shopingService)


 shopingADD.$inject=['shopingService']
 function shopingADD(shopingService){
 	var shop =this
 	shop.itemName = "";
 	shop.itemQuantity = "";
 

 shop.addItem = function(){
 	shopingService.addItem(shop.itemName,shop.itemQuantity);
 }
 
}
shopingView.$inject=['shopingService'];
function shopingView(shopingService){
	var View =this;
		View.items=shopingService.getItems();
		View.removeItem = function(itemIndex){
			shopingService.remove(itemIndex);
		};
}

function shopingService(){
	var service =this;
	var items =[];
	service.addItem = function(itemName,itemQuantity){
		var item ={
			name: itemName,
			quantity: itemQuantity
		};
		items.push(item);
	};

	service.getItems=function(){
		return items;
	};
	service.remove= function(itemIndex){
		items.splice(itemIndex,1);

	}
}
console.log(shopingService.items);

})();
