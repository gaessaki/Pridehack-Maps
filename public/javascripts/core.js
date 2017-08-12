angular.module('pridehacks-maps', ['ui.router', 'ngResource'])
.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: '/views/main.html',
            controller: 'mainController'
        });
});