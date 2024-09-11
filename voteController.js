app.controller('VoteController', ['$scope', 'VotingService', function($scope, VotingService) {
 $scope.candidates = [
 { name: 'BHARTIYA JANATA PARTY (BJP)'},
 { name: 'CONGRESS PARTY'},
{name: 'OTHERS'}
 { name: 'NOTA'}
 ];
 $scope.selectedCandidate = null;
 $scope.submitVote = function() {
 if ($scope.selectedCandidate) {
 VotingService.submitVote($scope.selectedCandidate).then(function(response) {
 localStorage.setItem('votedCandidate', JSON.stringify($scope.selectedCandidate));
 window.location.href = 'vote-details.html';
 }, function(error) {
 alert('Error submitting vote.');
 });
 } else {
 alert('Please select a candidate.');
 }
 };
}]);
