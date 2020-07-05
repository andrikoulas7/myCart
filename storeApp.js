var app = angular.module('myApp', []);
app.controller('productsController', ['$scope', function ($scope) {
    $scope.products = [
        { id: 1, name: "Oranges", price: 300 },
        { id: 2, name: "Apples", price: 400 },
        { id: 3, name: "Tomatoes", price: 500 },
        { id: 4, name: "Bananas", price: 600 }
    ];

    $scope.cart = [];
    $scope.total = 0;

    $scope.addtoCart = function (price, name, quantity) {
        $scope.cart.push({
            name: name,
            posotita: quantity,
            timi: price
        });
        //console.dir(name);
        console.dir($scope.cart);
        $scope.total += (price * quantity);
        $scope.posotita = quantity;
        $scope.product = name;
    }

    $scope.removeCart = function (index, timi, posotita) {
        //var index = $scope.cart.indexOf(posotita);
        $scope.cart.splice(index, 1);
        $scope.total -= (timi*posotita);
        console.log(index);
    }

}])