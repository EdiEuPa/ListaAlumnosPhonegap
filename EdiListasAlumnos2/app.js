(function(){
  'use strict';
  var Lista={};
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert(''+device.uuid);
      }, 100);
    };
  });

  module.controller('PAPDetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });

  module.controller('PAPController', function($scope, $data, $http) {
    $scope.items = Lista;  
    $http.get('http://www.empowerlabs.com/intellibanks/data/Sandbox/EdiEusebio/WebServiceEdi2.php').
  success(function(data, status, headers, config) {
  	data.reverse();
    $data.items=data;
    Lista=data;
    $scope.items = $data.items;  
    $scope.showDetail = function(item) {
      var selectedItem = item;
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('PAPDetail.html', {title : selectedItem.title});
    };
  }).
  error(function(data, status, headers, config) {
  	
  });
  });

  module.factory('$data', function() {
      var data = {};
      
      data.items = Lista;
      
      return data;
  });
})();




