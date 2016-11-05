(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider) {

  // otherwise url declaration
  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home',{
    url:"/",
    templateUrl: "src/templates/states/home.html"
  })

  .state('categories',{
    url:'/categories',
    templateUrl: "src/templates/states/categories.html",
    controller: "CategoryController as dataCtrl",
    resolve:{
      categories:['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items',{
    url:'/items/{category}/{categoryId}',
    templateUrl:'src/templates/states/items.html',
    controller:"ItemController as itemCtrl",
    resolve:{
      items:['$stateParams', 'MenuDataService',function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryId);
      }],
      category:['$stateParams',function ($stateParams) {
        return $stateParams.category
      }]
    }
  })
}

})();
