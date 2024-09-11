app.controller('LoginController', ['$scope', 'AuthService', function($scope, AuthService) {
 $scope.username = '';
 $scope.password = '';
 $scope.login = function() {
 console.log('Login function called');
 AuthService.login($scope.username, $scope.password).then(function(response) {
 console.log('Login response:', response);
 if (response.success) {
 window.location.href = 'vote.html';
 } else {
 alert('Invalid credentials');
 }
 }, function(error) {
 alert('Error logging in');
 });
 };
}]);
