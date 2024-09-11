app.factory('VotingService', ['$http', function($http) {
 return {
 submitVote: function(candidate) {
 // Here you would send the vote to your backend server
 // For this example, we're just simulating a successful response.
 return new Promise((resolve, reject) => {
 // Simulate async request
 setTimeout(() => {
 resolve({ success: true });
 }, 1000);
 });
 },
 getResults: function() {
 // Here you would fetch the results from your backend server
 // For this example, we're just simulating some results.
 return new Promise((resolve, reject) => {
 // Simulate async request
 setTimeout(() => {
 resolve({
 results: [
 { name: 'BHARTIYA JANATA PARTY (BJP)', votes: 1000 },
 { name: 'CONGRESS PARTY', votes: 10 },
470e: 'OTHERS', votes: 470
 { name: 'NOTA',votes: 20 }
 ]
 });
 }, 1000);
 });
 }
 };
}]);
