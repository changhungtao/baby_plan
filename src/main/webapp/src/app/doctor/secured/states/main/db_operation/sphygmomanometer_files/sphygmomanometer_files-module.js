'use strict';

/**
 * Create namespace.
 */
goog.provide('jxdctsec.main.db_operation.sphygmomanometer_files.module');

/**
 * Require controller.
 */
goog.require('jxdctsec.main.db_operation.sphygmomanometer_files.Ctrl');



/**
 * Module for main.db_operation.sphygmomanometer_files state.
 *
 * @return {angular.Module}
 */
jxdctsec.main.db_operation.sphygmomanometer_files.module = angular.module('main.db_operation.sphygmomanometer_files', [
  'ui.router'
]);



/**
 * Configuration function.
 *
 * Important! Do not call this function `config()`. It would collide
 * with the AngularJS `config()` function. The init part at the end of this file
 * would look like `my.blabla.config(my.blabla.config())` which obviously would
 * not work.
 *
 * `templateUrl` path must be relative to `index.html`.
 *
 * @param {ui.router.$stateProvider} $stateProvider
 * @ngInject
 */
jxdctsec.main.db_operation.sphygmomanometer_files.module.configuration = function($stateProvider) {

  $stateProvider.state('main.db_operation.sphygmomanometer_files', {
    url: '/sphygmomanometer_files/:patient_id/:file_type',
    templateUrl: 'states/main/db_operation/sphygmomanometer_files/sphygmomanometer_files.html',
    controller: 'SphygmomanometerFilesCtrl as sphygmomanometerFiles'
  });

};



/**
 * Init main.db_operation.sphygmomanometer_files module.
 */
jxdctsec.main.db_operation.sphygmomanometer_files.module
  .config(jxdctsec.main.db_operation.sphygmomanometer_files.module.configuration)
  .controller('SphygmomanometerFilesCtrl', jxdctsec.main.db_operation.sphygmomanometer_files.Ctrl);
