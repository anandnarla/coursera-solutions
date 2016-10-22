(function(){
  'use strict';
  var shoppingList=[
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
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListService',ShoppingListService);
  ToBuyController.$inject=['ShoppingListService'];
  function ToBuyController(ShoppingListService) {
    var toBuy=this;
    toBuy.toBuyShoppingList=ShoppingListService.toBuyItemsList;
    toBuy.bought=function (itemIndex) {
      // console.log(itemIndex);
      ShoppingListService.bought(itemIndex);
    };
  }
  AlreadyBoughtController.$inject=['ShoppingListService'];
  function AlreadyBoughtController(ShoppingListService) {
    var bought=this;
    bought.message=""
    try{
      bought.items=ShoppingListService.boughtItemsList;
    }
    catch(error){
      bought.message=error.message;
    }
  };
  function ShoppingListService() {
    var service=this;
    service.toBuyItemsList=shoppingList;
    service.boughtItemsList=[];
    // service.getToBuyItemsList=function () {
    //     return toBuyItemsList;
    // };
    // service.getBoughtItemsList=function () {
    //     return boughtItemsList;
    // };
    service.bought=function(itemIndex){
      // console.log("Bought");
      var item=service.toBuyItemsList[itemIndex];
      service.boughtItemsList.push(item);
      service.toBuyItemsList.splice(itemIndex,1);
      // console.log(boughtItemsList);
      // console.log(toBuyItemsList);
    };
  };
})();
