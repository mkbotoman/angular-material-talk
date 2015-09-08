var app = angular.module('SlidesApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', '$mdBottomSheet', '$mdDialog', '$mdToast', function($scope, $mdSidenav, $mdBottomSheet, $mdDialog, $mdToast){

  $scope.project = {
    description: ''
  };
  $scope.data = {};
  $scope.data.cb1 = true;

  $scope.data = {
    group1 : 'Banana',
    group2 : '2',
    group3 : 'avatar-1'
  };

  $scope.determinateValue = 30;
  $scope.determinateValue2 = 30;

  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $scope.openBottomSheet = function() {
    $mdBottomSheet.show({
      template: '<md-bottom-sheet style="height:50px; background:#3F51B5; font-size:40px; color:white;">Hello!</md-bottom-sheet>'
  })};
  var alert;
  $scope.showAlert = showAlert;

  function showAlert() {
      alert = $mdDialog.alert({
        title: 'Attention',
        content: 'This is an example of how easy dialogs can be!',
        ok: 'Close'
      });
      $mdDialog
        .show( alert )
        .finally(function() {
          alert = undefined;
        });
    }
    
    $scope.openToast = function($event) {
      $mdToast.show($mdToast.simple().content('Hello!'));
      // Could also do $mdToast.showSimple('Hello');
    };
}]);
