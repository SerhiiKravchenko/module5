angular.module('pokemon')
    .directive("pokemonMain", function () {
        return {
            restrict: 'E',
            templateUrl: "/pages/templates/all-pokemons.html",
            controller: 'PokemonMain',
            controllerAs: 'mainCtr'
        }

    })
    .directive("descPok", function () {
        return {
            restrict: 'E',
            templateUrl: "/pages/templates/description-pokemon.html"
        }
    })
    .directive("favoritePokemons", function () {
        return {
            restrict: 'E',
            templateUrl: "/pages/templates/all-pokemons.html",
            controller: 'FavoriteController',
            controllerAs: 'mainCtr'
        }
    });