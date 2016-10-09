'use strict';

angular.module('pokemon', ['ngRoute']);

angular.module('pokemon')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                    templateUrl: 'pages/main.html'
                }
            )
            .when('/favorite', {
                    templateUrl: '/pages/favorite.html'
                }
            )
            .otherwise({redirectTo: "/"})
    })
;