/**
 * Created by ChanakaDeSilva on 3/20/2015.
 */
function CustomerOrderController($scope, customerService) {
//    End of map

    $scope.allCustomers = [];
    var customer_lat = "";
    var customer_lag = "";

    //    View All Customers
    customerService.getAllCustomers().then(function (data) {
        console.log(data);
        $scope.allCustomers = data.data;
    });

//    Adding the google map-------------------------------------------------

    var cities = [
        {
            city: 'Isdhoo',
            desc: 'Oil Plantation bla bla ',
            lat: 2.122036,
            long: 73.573096
        },
        {
            city: 'Mega Constructions',
            desc: 'Oil Plantation bla blaaa',
            lat: 2.096864,
            long: 73.546455
        },
        {
            city: 'Asrafee Magu',
            desc: 'This is the second best city in the world!',
            lat: 2.096864,
            long: 73.546455
        },
        {
            city: 'Aa Magu',
            desc: 'This city is live!',
            lat: 2.094317,
            long: 73.545377
        },
        {
            city: 'Las Vegas',
            desc: 'Sin City...\'nuff said!',
            lat: 36.0800,
            long: -115.1522
        }
    ];

    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(1.931747, 73.541439),
        mapTypeId: google.maps.MapTypeId.SATELLITE

    };

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var map = $scope.map;
    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (info) {

        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    };

    for (i = 0; i < cities.length; i++) {
        createMarker(cities[i]);
    }

    google.maps.event.addListener(map, 'click', function (e) {
        console.log("GET LOCATION ACTIVATED !!!!");
        customer_lat = e.latLng.lat();
        customer_lag = e.latLng.lng();
        alert("Latitude: " + e.latLng.lat() + "\r\nLongitude: " + e.latLng.lng());

//        Adding marker
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(customer_lat, customer_lag),
            title: 'Selected Location'
        });
        marker.content = '<div class="infoWindowContent">' + 'Oil Company' + '</div>';

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);
//        Ending marker

    });


    $scope.openInfoWindow = function (e, selectedMarker) {
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    };

//End of the map-------------------------------------------------

    $scope.print_location = function () {
        console.log("customer_lat : " + customer_lat);
        console.log("customer_lag : " + customer_lag);
    };

}