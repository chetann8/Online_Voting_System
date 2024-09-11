app.factory('AuthService', ['$q', function($q) {
 return {
 login: function(username, password) {
 // Simulate backend login
 var deferred = $q.defer();
 setTimeout(function() {
 if (username === 'admin' && password === 'password') {
 deferred.resolve({ success: true });
 } else {
 deferred.resolve({ success: false });
 }
 }, 1000);
 return deferred.promise;
 },
 register: function(username, password) {
 // Simulate backend registration
 var deferred = $q.defer();
 setTimeout(function() {
 deferred.resolve({ success: true });
 }, 1000);
 return deferred.promise;
 }
 };
}]);
