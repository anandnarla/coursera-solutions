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
      found:'<foundList',
      onRemove:'&'
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
    ctrl.nothingFound=false;
    if(ctrl.searchQuery===""){
      ctrl.nothingFound=true;
    }
    else {
      MenuSearchService.getMatchedMenuItems(ctrl.searchQuery).then(function(result){
        // console.log(result);
        ctrl.menuItems=result;
        if(ctrl.menuItems.length===0){
          ctrl.nothingFound=true;
        }
        // console.log(ctrl.menuItems);
      });
    }
  };
  ctrl.remove=function (itemIndex) {
    // console.log('removing');
    // console.log(ctrl.menuItems.length);
    // console.log(ctrl.menuItems);
    MenuSearchService.removeSelectedItem(itemIndex);
  };
}

MenuSearchService.$inject=['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service=this;
  service.foundItems=[];


  service.getMatchedMenuItems=function(searchString){
    return $http({ method: "GET", url: (ApiBasePath + "/menu_items.json")}).then(function(response){
      var menuItems=response.data;
      service.foundItems=[];
      for (var i = 0; i < menuItems.menu_items.length; i++) {
        if (menuItems.menu_items[i].description.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
          service.foundItems.push(menuItems.menu_items[i])
        }
      }
      // console.log(service.foundItems);
      return service.foundItems;
    });
  };

  service.removeSelectedItem=function(itemIndex) {
    service.foundItems.splice(itemIndex,1);
    // console.log('on removeSelectedItem service');
  };
}

})();
