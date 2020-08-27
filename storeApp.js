var app = angular.module('myApp', []);
app.controller('productsController', ['$scope', function ($scope) {
    $scope.products = [
        { name: "Oranges", category: "Citrus", price: 2.5, image: "./images/oranges.jpg" },
        { name: "Grapefruits", category: "Citrus", price: 3.0, image: "./images/grapefruit.jpg" },
        { name: "Mandarins", category: "Citrus", price: 1.8, image: "./images/mandarin.jpg" },
        { name: "Limes", category: "Citrus", price: 2.5, image: "./images/lime.jpg" },
        { name: "Nectarines", category: "Stone fruit", price: 2.4, image: "./images/nectarin.jpg" },
        { name: "Apricots", category: "Stone fruit", price: 1.3, image: "./images/apricot.jpg" },
        { name: "Peach", category: "Stone fruit", price: 3.5, image: "./images/peach.jpg" },
        { name: "Bananas", category: "Tropical", price: 1.2, image: "./images/bananas.jpg" },
        { name: "Mangoes", category: "Tropical", price: 2.1, image: "./images/mangos.jpg" },
        { name: "Strawberries", category: "Berries", price: 1.6, image: "./images/strawberries.jpg" },
        { name: "Blueberries", category: "Berries", price: 1.4, image: "./images/blueberries.jpg" },

    ];

    $scope.cart = [];
    $scope.total = 0;

    //add products to your cart
    $scope.addtoCart = function (price, name, quantity) {
        if (quantity == 0) {
            $scope.cart.push({
                name: name,
                posotita: 1,
                timi: price,
            })
        } else {
            $scope.cart.push({
                name: name,
                posotita: quantity,
                timi: price
            });
        }        //console.dir(name);
        console.dir($scope.cart);
        $scope.total += (price * quantity);
        $scope.posotita = quantity;
        $scope.product = name;
        console.log("Posotita: ", quantity);
    }

    //remove products from your cart
    $scope.removeCartItem = function (index, timi, posotita) {
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

    //Remove all products from cart
    $scope.clearCart = function () {
        $scope.total = 0;
        var len = $scope.cart.length;
        console.log(len);
        $scope.cart.splice(0, len);
        console.dir($scope.cart);
        console.log($scope.cart);

    }

}])