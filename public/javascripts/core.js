angular.module('pridehacks-maps', ['ui.router', 'ngResource'])
.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: '/views/main.html',
            controller: 'mainController'
        })
        .state('form', {
            url: '/form',
            templateUrl: '/views/form.html',
            controller: 'formController'
        })
        .state('update', {
            url: '/',
            templateUrl: '/views/update.html',
            controller: 'updateController'
        });
});