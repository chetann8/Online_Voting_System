app.controller('RegisterController', ['$scope', 'AuthService', function($scope, AuthService) {
 $scope.username = '';
 $scope.password = '';
 $scope.confirmPassword = '';
 $scope.register = function() {
 if ($scope.password !== $scope.confirmPassword) {
 alert('Passwords do not match');
 return;
 }
 AuthService.register($scope.username, $scope.password).then(function(response) {
 if (response.success) {
 window.location.href = 'login.html';
 } else {
 alert('Registration failed');
 }
 }, function(error) {
 alert('Error registering');
 });
 };
}]);
