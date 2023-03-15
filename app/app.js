// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {

    var pages = ['Contracts', 'Client Nodes', 'FAQ', 'Home', 'Case Officers'];

  var navComponent = new navigatorClass({
    target: document.getElementById('navigator'),
    props: {
      pages: ['Contracts', 'Client Nodes', 'Suppliers', 'Countries', 'Users']
    }
  });

  // var navigatorComponent = new navigatorClass({
  //   target: document.getElementById('navigator'),
	// 		props: {
	// 			pages: ['Contracts', 'Client Nodes', 'Suppliers', 'Countries', 'Users']
	// 		}
  // });

  $scope.clearNavigatorValue = function() {
    navComponent.clear();
  }

  var textComponent = new textClass({
    target: document.getElementById("text-box"),
    props: {
      value: "Hello World",
      metadata: {
        Required: true,
        Hidden: false,
        CustomProperties: {
          multiline: false,
        },
      },
      autocomplete: false,
    }
  });

});