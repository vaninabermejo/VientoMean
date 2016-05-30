angular.module("VientoSurApp").config(function($routeProvider){
  $routeProvider
  .when("/", {
    redirectTo:"/products"
  })
  .when("/products", {
    templateUrl:"assets/templates/products/index.html",
    controller:"ProductsIndexController",
  })

  .when("/products/new", {
    templateUrl:"assets/templates/products/productNew.html",
    controller:"ProductsCreateController",
  })

  .when("/products/:id", {
    templateUrl:"assets/templates/products/productShow.html",
    controller:"ProductsShowController",
  })

  .when("/products/:id/edit", {
    templateUrl:"assets/templates/products/productEdit.html",
    controller:"ProductsEditController",
  })

  .when("/users", {
    templateUrl:"assets/templates/users/index.html",
    controller:"UsersIndexController",
  })

  .when("/users/:id", {
    templateUrl:"assets/templates/users/userShow.html",
    controller:"UserShowController",
  })


});
