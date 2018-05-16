'use strict';

goog.provide('jxmgropn.version.Service');

/**
 * Version service. In the angular-seed this is a 'value service' but I wanted
 * to show how to use services as JS classes. In the AngularJS world
 * 'service services' are classes.
 *
 * @constructor
 */
jxmgropn.version.Service = function() {
  this.version = '0.0.1';
};

/**
 * Return the current version.
 *
 * @export
 * @return {string}
 */
jxmgropn.version.Service.prototype.get = function() {
  return this.version;
};
