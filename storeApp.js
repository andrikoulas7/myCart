var app = angular.module('myApp', []);
app.controller('productsController', ['$scope', function ($scope) {
    $scope.products = [
        { name: "Oranges", category: "Citrus", price: 300 },
        { name: "Grapefruits", category: "Citrus", price: 300 },
        { name: "Mandarins", category: "Citrus", price: 500 },
        { name: "Limes", category: "Citrus", price: 600 },
        { name: "Nectarines", category: "Stone fruit", price: 700 },
        { name: "Apricots", category: "Stone fruit", price: 250 },
        { name: "Peach", category: "Stone fruit", price: 350 },
        { name: "Bananas", category: "Tropical", price: 100 },
        { name: "Mangoes", category: "Tropical", price: 550 },
        { name: "Strawberries", category: "Berries", price: 160 },
        { name: "Blueberries", category: "Berries", price: 700 },

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
        $scope.total -= (timi * posotita);
        console.log(index);
    }

}])