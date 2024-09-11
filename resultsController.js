app.controller('ResultsController', ['$scope', 'VotingService', function($scope, VotingService) 
{
 VotingService.getResults().then(function(response) {
 $scope.results = response.results;
 }, function(error) {
 alert('Error fetching results.');
 });
}]);
