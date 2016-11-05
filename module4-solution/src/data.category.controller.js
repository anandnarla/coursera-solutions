(function () {

angular.module('data')
.controller('CategoryController',CategoryController);

CategoryController.$inject=['categories'];
function CategoryController(categories) {
  var dataCtrl=this;
  dataCtrl.categories=categories;
}
})();
