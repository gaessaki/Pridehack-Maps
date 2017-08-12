angular.module('pridehacks-maps')
    .factory('Emergency', function ($resource) {
        return $resource('/api/emergency/');
    });