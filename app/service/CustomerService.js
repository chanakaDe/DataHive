/**
 * Created by Chanaka on 9/3/2014.
 */
module.factory('customerService', function ($http, $route) {

    var customerService = {

        /**
         * Get all roles from server
         *
         * @returns {*}
         */
        saveCustomer: function (data) {
            return $http({
                method: "POST",
                data: data,
                headers: headers,
                url: host.customer + '/customer_register'}).then(function (response) {
                return response.data;
            });
        },
        getAllCustomers: function () {
            return $http({
                method: "GET",
                headers: headers,
                url: host.customer + '/get_all_customer_details'}).then(function (response) {
                return response.data;
            });
        },
        savePumpingDetails: function () {
            return $http({
                method: "POST",
                headers: headers,
                url: host.pumping_details + '/save'}).then(function (response) {
                return response.data;
            });
        }
    };
    return customerService;
});