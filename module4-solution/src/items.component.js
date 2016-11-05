(function () {

angular.module('data')
.component('items',{
  templateUrl: 'src/templates/components/items.component.html',
  controller:ItemsComponentController,
  bindings:{
    items:"<"
  }
})
function ItemsComponentController() {

}
})();
