'use strict';

/**
 * Create namespace.
 */
goog.provide('jxdctsec.main.user_center.Ctrl');



/**
 * User center controller.
 *
 * @constructor
 * @export
 */
jxdctsec.main.user_center.Ctrl = function() {

  /**
   * @type {String}
   * @nocollapse
   */
  this.label = 'some label from user center controller';

};



/**
 * Write `text` to stdout.
 *
 * Example function that we'd like to access in our `main.user_center.?`
 * child controller.
 *
 * @param {String} text
 */
jxdctsec.main.user_center.Ctrl.prototype.log = function(text) {
  console.log(text);
};
