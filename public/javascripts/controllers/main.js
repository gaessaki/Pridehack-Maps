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

// alert("test!!!");
$(document).ready(function () {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(45.467809, -73.628636)
      // center: {lat: 45.467809, lng: -73.628636}
      // mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
})