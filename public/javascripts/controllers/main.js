angular.module('pridehacks-maps')
.controller('mainController', function ($scope, $location, CheckService, EmergencyService) {
    $scope.locData = {};
    $scope.checkin = function(data) {
        $location.path('/form');
        CheckService.in();
        //call api service
    }

    $scope.emergency = function() {
        EmergencyService.sendText();
    }
});

$(document).ready(function () {
    loadMap();
})

function loadMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(45.467809, -73.628636)
      // center: {lat: 45.467809, lng: -73.628636}
      // mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var locations = [
        [45.467809, -73.628636, 1502566344000, 'John'],
        [45.467819, -73.618646, 1502561341000, 'Marie'],
    ];

    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {
      var color = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
      if (locations[i][3] == 'Marie') {
        color = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
      }
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][0], locations[i][1]),
        map: map,
        icon: color
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          var t = new Date(locations[i][2]);
          infowindow.setContent(locations[i][3] + ': ' + t.toGMTString());
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}
