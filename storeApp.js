var app = angular.module('myApp', []);
app.controller('productsController', ['$scope',function ($scope, filterFilter) {
    $scope.products = [
        { id:1, name: "Oranges", price: 3000 },
        { id:2, name: "Apples", price: 4000 },
        { id:3, name: "Tomatoes", price: 5000 },
        {id: 4, name: "Bananas", price: 6000}
    ];

    $scope.cart = [];
    $scope.total = 0;
    $scope.addtoCart = function(qty){
        $scope.cost = $scope.products.price * $scope.qty;
    }
}])