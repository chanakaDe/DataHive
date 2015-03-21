/**
 * Created by ChanakaDeSilva on 3/19/2015.
 */
function CustomerController($scope, customerService) {

    $scope.allCustomers = [];
    var customer_lat = "";
    var customer_lag = "";
    var customer_id = "";

//    View All Customers
    customerService.getAllCustomers().then(function (data) {
        console.log(data);
        $scope.allCustomers = data.data;
    });

//    Customer Add Method
    $scope.addCustomer = function () {
        var customer = $scope.customer;

        console.log(customer);
        customerService.saveCustomer(customer).then(function (data) {
            console.log(data);
            customer_id = data.data;
        });

        $scope.pump.customerId = 0;
        var pump = $scope.pump;

        console.log(pump);
        customerService.savePumpingDetails(pump).then(function (data) {
            console.log(data);
        });
//        $scope.customer = {};
//        $scope.pump = {};
    };

//    Adding the google map-------------------------------------------------
    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(1.931747, 73.541439),
        mapTypeId: google.maps.MapTypeId.SATELLITE

    };

    $scope.map = new google.maps.Map(document.getElementById('map1'), mapOptions);
    var map = $scope.map;
    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    google.maps.event.addListener(map, 'click', function (e) {
        console.log("GET LOCATION ACTIVATED !!!!");
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


}