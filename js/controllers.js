angular.module('app.controllers', [])

.controller('generarCDigoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
	// You can include any angular dependencies as parameters for this function
	// TIP: Access Route Parameters for your page via $stateParams.parameterName
	function ($scope, $stateParams) {


	}
])

.controller('iPayDemoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
	// You can include any angular dependencies as parameters for this function
	// TIP: Access Route Parameters for your page via $stateParams.parameterName
	function ($scope, $stateParams) {


	}
])

.controller('escanearCDigoCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
	// You can include any angular dependencies as parameters for this function
	// TIP: Access Route Parameters for your page via $stateParams.parameterName
	function ($scope, $stateParams, $state) {
		function onSuccess(data) {
			$state.go('datosDePago');
		}

		function onError(err) {
			console.error(err);
		}

		navigator.mediaDevices.enumerateDevices()
			.then(function (devices) {
				devices = devices.filter(function (d) {
					return d.kind === 'videoinput';
				});
				var back = devices.find(function (d) {
					return d.label.toLowerCase().indexOf('back') !== -1;
				}) || (devices.length && devices[devices.length - 1]);
				return back.deviceId;
			}).then(function (deviceId) {
				var qr = new QrReader({
					sucessCallback: onSuccess,
					errorCallback: onError,
					videoSelector: '#video',
					stopOnRead: true,
					facingMode: deviceId,
				});
			});
	}
])

.controller('iPayQRCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
	// You can include any angular dependencies as parameters for this function
	// TIP: Access Route Parameters for your page via $stateParams.parameterName
	function ($scope, $stateParams) {


	}
])

.controller('datosDePagoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
	// You can include any angular dependencies as parameters for this function
	// TIP: Access Route Parameters for your page via $stateParams.parameterName
	function ($scope, $stateParams) {


	}
])

.controller('pagoRealizadoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
	// You can include any angular dependencies as parameters for this function
	// TIP: Access Route Parameters for your page via $stateParams.parameterName
	function ($scope, $stateParams) {


	}
])
