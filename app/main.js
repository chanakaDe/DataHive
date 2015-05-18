var module = angular.module('open_data_hive', ['ngRoute']);


module.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'app/template/dashboard.html',
            controller: ''
        }).when('/customer', {
            templateUrl: 'app/template/customer/AddCustomer.html',
            controller: ''
        }).when('/view_customer', {
            templateUrl: 'app/template/customer/ViewCustomer.html',
            controller: ''
        }).when('/add_customer_order', {
            templateUrl: 'app/template/customer_order/AddCustomerOrder.html',
            controller: ''
        }).when('/map', {
            templateUrl: 'app/template/maps.html',
            controller: ''
        }).otherwise({
            redirectTo: '/'
        });
});

var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};
