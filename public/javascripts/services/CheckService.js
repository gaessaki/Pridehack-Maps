'use strict'

angular.module('pridehacks-maps')
    .factory('CheckService', function CheckService(Check) {
    
    return {
        in: function (data, callback) {
            var cb = callback || angular.noop;
            Check.save({
                data: data
            },
            function (err) {
                console.log(err.data);
                return cb(err.data);
            })
        }
    }
})