(function(){

'use strict';
var shopingList =[{name:"cookies" , quantity :10},
               {name:"chips" , quantity :5},
               {name:"bread" , quantity :2},
               {name:"pept bismol" , quantity :4},
               {name:"noodles",quantity:10}];

angular.module('ShoppingListCheckOff',[])
       .controller('ToBuyController',ToBuyController)
       .controller('AlreadyBoughtController',AlreadyBoughtController)
       .service('ShoppingListService',ShoppingListService);

ToBuyController.$inject=['ShoppingListService'];

function ToBuyController(ShoppingListService){
  var ToBuy =this;

  ToBuy.items= ShoppingListService.getItems();

  ToBuy.removeItem=function(itemIndex){
    //console.log(itemIndex);
    ShoppingListService.removeItem(itemIndex);
};

}

AlreadyBoughtController.$inject=['ShoppingListService'];

function AlreadyBoughtController(ShoppingListService){
    var AlreadyBought =this;
  
    AlreadyBought.items= ShoppingListService.getBoughtArray();
}



function ShoppingListService(){
    var service = this;
     service.items =shopingList;
     service.bought =[];
   
    service.removeItem =function(itemIndex){
         service.bought.push(service.items[itemIndex]);
         service.items.splice(itemIndex,1);
    }

    service.getItems= function(){
        return service.items;
    };
    service.getBoughtArray = function(){
        //console.log(service.bought);
        return service.bought;
    };
}
})();