(function () {

angular.module('data')
.component('categories',{
  templateUrl: "src/templates/components/categories.component.html",
  controller:CategoriesComponentController,
  bindings:{
    categories:"<"
  }
});
function CategoriesComponentController() {
}
})();
