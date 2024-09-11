app.controller('VoteDetailsController', ['$scope', function($scope) {
 $scope.votedCandidate = JSON.parse(localStorage.getItem('votedCandidate'));
}]);
