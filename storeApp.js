var app = angular.module('myApp', []);
app.controller('productsController', ['$scope', function ($scope) {
    $scope.products = [
        { id: 1, name: "Oranges", price: 3000 },
        { id: 2, name: "Apples", price: 4000 },
        { id: 3, name: "Tomatoes", price: 5000 },
        { id: 4, name: "Bananas", price: 6000 }
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

    $scope.removeCart = function (posotita, timi) {
        var index = $scope.cart.indexOf(posotita);
        console.log(index);
        $scope.cart.splice(index, 1);
        $scope.total -= timi;
    }

}])