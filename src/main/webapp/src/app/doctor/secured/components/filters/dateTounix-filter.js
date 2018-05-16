/**
 * Created by zhanga.fnst on 2015/6/16.
 */
'use strict';

goog.provide('jxdctsec.dateTounix.Filter.factory');

/**
 * Convert boolean values to unicode checkmark or cross.
 *
 * @constructor
 */
jxdctsec.dateTounix.Filter = function() {
    this.checkmark = '\u2714';
    this.cross = '\u2718';
    this.convert = this.convert.bind(this);
};

/**
 * Version directive factory.
 *
 * @return {function}
 */
jxdctsec.dateTounix.Filter.factory = function() {
    var filter = new jxdctsec.dateTounix.Filter();
    return filter.convert;
};

/**
 * Convert truthy and falsy values to unicode symbols.
 *
 * @param {string} input
 */
jxdctsec.dateTounix.Filter.prototype.convert = function(input) {
    if(!input){
        return '';
    }else {
        var tmp_datetime = input.toString().replace(/:/g,'-');
        tmp_datetime = tmp_datetime.toString().replace(/ /g,'-');
        var arr = tmp_datetime.split("-");
        var now = new Date(Date.UTC(arr[0],arr[1]-1,arr[2],arr[3]-8,arr[4],arr[5]));
        return parseInt(now.getTime()/1000);
    }
};