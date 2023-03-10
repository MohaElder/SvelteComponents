// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];

  var textClass = window.svelteComponents.Text
  var navigatorClass = window.svelteComponents.Navigator

  var navigatorComponent = new navigatorClass({
    target: document.getElementById('navigator'),
			props: {
				pages: ['Contracts', 'Client Nodes', 'Suppliers', 'Countries', 'Users']
			}
  });

  $scope.clearNavigatorValue = function() {
    navigatorComponent.clear();
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

  $scope.toggleTextBox = function() {
    textComponent.toggle();
  }

  $scope.getTextBoxValue = function() {
    textComponent.getValue().then(res => alert("Textbox Value: " + res));
  }

  $scope.clearTextBoxValue = function() {
    textComponent.clearInput();
  }
});