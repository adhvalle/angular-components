angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function($firebaseRefProvider) {
	var config = {
		apiKey: "AIzaSyBoq7j2QhB7-YnCnYuMTcBWcbUJZRwloPg",
		authDomain: "contacts-manager-a5c89.firebaseapp.com",
		databaseURL: "https://contacts-manager-a5c89.firebaseio.com",
		storageBucket: "contacts-manager-a5c89.appspot.com",
		messagingSenderId: "443209305949"
	};
	$firebaseRefProvider
		.registerUrl({
			default: config.databaseURL,
			contacts: config.databaseURL + '/contacts'
		});

	firebase.initializeApp(config);
  })
  .run(function($transitions, $state, AuthService){
    $transitions.onStart({
      to: function(state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
      return AuthService
        .requireAuthentication()
        .catch(function() {
          return $state.target('auth.login');
        });
    });
    $transitions.onStart({
      to: 'auth.*'
    }, function() {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });
