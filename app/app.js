// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {

    var pages = ['Contracts', 'Client Nodes', 'FAQ', 'Home', 'Case Officers'];

    var NavigatorClass = window.svelteComponents.Navigator;
    $scope.navigatorComponent = new NavigatorClass({
        target: document.getElementById('navigator'),
        props: {
            pages: pages
        }
    });

});