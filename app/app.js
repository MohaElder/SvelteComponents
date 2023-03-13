// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  var navigatorClass = window.svelteComponents.Navigator;

  $scope.navigatorComponent = new navigatorClass({
    target: document.getElementById('navigator'),
    props: {
      pages: ['Home', 'About', 'Contact', 'Blog', 'FAQ', 'Client Nodes', 'Catalogues']
    }
  });

});