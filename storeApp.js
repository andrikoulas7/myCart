var app = angular.module('myApp', []);
app.controller('productsController', ['$scope', function ($scope) {
    $scope.products = [
        { name: "Oranges", category: "Citrus", price: 30, image: "./images/oranges.jpg" },
        { name: "Grapefruits", category: "Citrus", price: 30, image: "./images/grapefruit.jpg" },
        { name: "Mandarins", category: "Citrus", price: 18 },
        { name: "Limes", category: "Citrus", price: 25 },
        { name: "Nectarines", category: "Stone fruit", price: 24 },
        { name: "Apricots", category: "Stone fruit", price: 25 },
        { name: "Peach", category: "Stone fruit", price: 35 },
        { name: "Bananas", category: "Tropical", price: 10, image: "./images/bananas.jpg" },
        { name: "Mangoes", category: "Tropical", price: 21 },
        { name: "Strawberries", category: "Berries", price: 16 },
        { name: "Blueberries", category: "Berries", price: 14 },

    ];

    $scope.cart = [];
    $scope.total = 0;

    //add products to your cart
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

    //remove products from your cart
    $scope.removeCart = function (index, timi, posotita) {
        //var index = $scope.cart.indexOf(posotita);
        $scope.cart.splice(index, 1);
        if ($scope.total != 0) {
            $scope.total -= (timi * posotita);
        } else {
            $scope.total = 0;
        }
        console.log(index);
        console.dir($scope.cart);

    }

    $scope.clearCart = function () {
        $scope.total = 0;
        var len = $scope.cart.length;
        console.log(len);
        $scope.cart.splice(0,len);
        //$scope.cart.push({
        //    name: "",
        //    posotita: 0,
        //    timi: 0
        //})
        console.dir($scope.cart);
        console.log($scope.cart);

    }

}])