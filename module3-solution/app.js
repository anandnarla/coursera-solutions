(function()
{
'use strict';
angular.module('NarrowItDownApp' , [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com")
.directive('foundItems',FoundItemDirective)
// .controller('FoundItemsController',FoundItemsController);

function FoundItemDirective() {
  var ddo={
    scope:{
      found:'=foundList'
    },
    controller:FoundItemsController,
    controllerAs:'items',
    bindToController:true,
    templateUrl: 'listView.html'
  }
  return ddo;
}

function FoundItemsController() {
  var items=this;
  // items.something="";
  // this.menuItems=[];
}
NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl=this;
  ctrl.searchQuery="";
  ctrl.search=function () {
  MenuSearchService.getMatchedMenuItems(ctrl.searchQuery).then(function(result){
    // console.log(result);
    ctrl.menuItems=result;
    console.log(ctrl.menuItems);
  });
  };
}

MenuSearchService.$inject=['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service=this;
  service.getMatchedMenuItems=function(searchString){
    var foundItems=[];
    return $http({ method: "GET", url: (ApiBasePath + "/menu_items.json")}).then(function(response){
      var menuItems=response.data;
      for (var i = 0; i < menuItems.menu_items.length; i++) {
        if (menuItems.menu_items[i].description.indexOf(searchString) !== -1) {
          foundItems.push(menuItems.menu_items[i])
        }
      }
      console.log(foundItems);
      return foundItems;
    });
  };
}

})();
