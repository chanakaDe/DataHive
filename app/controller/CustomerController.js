/**
 * Created by ChanakaDeSilva on 3/19/2015.
 */
function CustomerController($scope, customerService) {

    $scope.allCustomers = [];

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
        });
        $scope.customer = {};
    };

}