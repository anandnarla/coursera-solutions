(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListService',ShoppingListService);


  ToBuyController.$inject=['ShoppingListService'];
  function ToBuyController(ShoppingListService) {
    var toBuy=this;
    toBuy.toBuyShoppingList=ShoppingListService.toBuyItemsList;
    toBuy.bought=function (itemIndex) {
      ShoppingListService.bought(itemIndex);
    };
  };


  AlreadyBoughtController.$inject=['ShoppingListService'];
  function AlreadyBoughtController(ShoppingListService) {
    var bought=this;
    bought.items=ShoppingListService.boughtItemsList;
  };


  function ShoppingListService() {
    var service=this;
    service.toBuyItemsList=[
      {
        name:"Cookies",
        quantity:10
      },
      {
        name:"Choclates",
        quantity:9
      },
      {
        name:"biscuits",
        quantity:7
      },
      {
        name:"soaps",
        quantity:1
      },
      {
        name:"shampoo",
        quantity:5
      }
    ];
    service.boughtItemsList=[];
    service.bought=function(itemIndex){
      var item=service.toBuyItemsList[itemIndex];
      service.boughtItemsList.push(item);
      service.toBuyItemsList.splice(itemIndex,1);
    };
  };
})();
