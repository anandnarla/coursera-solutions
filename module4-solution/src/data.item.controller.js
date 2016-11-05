(function () {

angular.module('data')
.controller('ItemController',ItemController);

ItemController.$inject=['items','category'];
function ItemController(items,category) {
  var itemCtrl=this;
  itemCtrl.category=category;
  itemCtrl.items=items;
}
})();
