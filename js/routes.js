angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.generarCDigo', {
    url: '/generate',
    views: {
      'tab1': {
        templateUrl: 'templates/generarCDigo.html',
        controller: 'generarCDigoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.iPayDemo'
      2) Using $state.go programatically:
        $state.go('tabsController.iPayDemo');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/
      /page1/tab2/
  */
  .state('tabsController.iPayDemo', {
    url: '/',
    views: {
      'tab1': {
        templateUrl: 'templates/iPayDemo.html',
        controller: 'iPayDemoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/iPayDemo.html',
        controller: 'iPayDemoCtrl'
      }
    }
  })

  .state('tabsController.escanearCDigo', {
    url: '/scan',
    views: {
      'tab3': {
        templateUrl: 'templates/escanearCDigo.html',
        controller: 'escanearCDigoCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.iPayQR', {
    url: '/ipay',
    views: {
      'tab1': {
        templateUrl: 'templates/iPayQR.html',
        controller: 'iPayQRCtrl'
      }
    }
  })

  .state('datosDePago', {
    url: '/payment',
    templateUrl: 'templates/datosDePago.html',
    controller: 'datosDePagoCtrl'
  })

  .state('pagoRealizado', {
    url: '/confirm',
    templateUrl: 'templates/pagoRealizado.html',
    controller: 'pagoRealizadoCtrl'
  })

$urlRouterProvider.otherwise('/page1/tab2/')

  

});