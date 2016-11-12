function AuthFormController () {
  var ctrl = this;

  ctrl.$onChange = function (changes) {
    if (changes.user) {
      ctrl.user = angular.copy(ctrl.user);
    }
  };

  ctrl.submitForm = function () {
    ctrl.onSubmit({
      $event: {
        user: ctrl.user
      }
    });
  };
}

angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController);