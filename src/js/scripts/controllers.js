'use strict';


(function () {
    angular.module('pokemon')
        .controller("PokemonMain", function ($http, $scope) {
            var controller = this;
            $http.get('http://pokeapi.co/api/v1/pokemon/?limit=12')
                .success(function (data) {
                    controller.pokemons = data.objects;
                });
            $scope.id = 0;
            $scope.element = {};
            $scope.isSelected = function (set) {
                return $scope.id == set;
            };

            $scope.setId = function (id, element) {
                $scope.id = id;
                $scope.setShowDescription(false);
                $scope.element = element;

            };

            $scope.storagePr = function (val) {
                if(localStorage.getItem(val)){
                    return true;
                }
            };
            $scope.showDescription = false;
            $scope.setShowDescription = function (value) {
                $scope.showDescription = value;
            };
            $scope.addFavorite = function (element) {
                if(localStorage.getItem(element.pkdx_id)){
                    localStorage.removeItem(element.pkdx_id)
                }else{
                    localStorage.setItem(element.pkdx_id, JSON.stringify(element))
                }
            };

        })
        .controller("FavoriteController", function ($scope) {
            var controller = this;
            controller.pokemons = [];
            function addPokemons() {
                if (localStorage.length !== 0)
                    for (var key in localStorage) {
                        var elem = JSON.parse(localStorage.getItem(key));
                        controller.pokemons.push(elem);
                    }
            }
            addPokemons();
            $scope.id = 0;
            $scope.element = {};

            $scope.isSelected = function (set) {
                return $scope.id == set;
            };

            $scope.setId = function (id, element) {
                $scope.id = id;
                $scope.setShowDescription(false);
                $scope.element = element;
            };

            $scope.storagePr = function (val) {
                if(localStorage.getItem(val)){
                    return true;
                }
            };
            $scope.showDescription = false;
            $scope.setShowDescription = function (value) {
                $scope.showDescription = value;
            };
            $scope.addFavorite = function (element) {
                if(localStorage.getItem(element.pkdx_id)){
                    localStorage.removeItem(element.pkdx_id)
                }else{
                    localStorage.setItem(element.pkdx_id, JSON.stringify(element))
                }
            };
        })

})();