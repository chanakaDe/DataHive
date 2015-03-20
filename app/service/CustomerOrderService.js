/**
 * Created by Chanaka on 9/3/2014.
 */
module.factory('customerOrderService', function ($http, $route) {

    var customerOrderService = {

        /**
         * Get all roles from server
         *
         * @returns {*}
         */
        saveCustomerOrder: function (data) {
            return $http({
                method: "POST",
                data: data,
                headers: headers,
                url: host.customer + '/customer_register'}).then(function (response) {
                return response.data;
            });
        },
        getAllCustomerOrders: function () {
            return $http({
                method: "GET",
                headers: headers,
                url: host.customer + '/get_all_customer_details'}).then(function (response) {
                return response.data;
            });
        }
    };
    return customerOrderService;
});