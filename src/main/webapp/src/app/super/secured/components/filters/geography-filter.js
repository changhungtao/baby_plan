/**
 * Created by zhanga.fnst on 2015/6/16.
 */
'use strict';

goog.provide('jxsprsec.district.Filter.factory');

/**
 * Convert boolean values to unicode checkmark or cross.
 *
 * @constructor
 */
jxsprsec.district.Filter = function(constants) {
    this.gotDISTRICTS = constants.gotDISTRICTS;
    this.convert = this.convert.bind(this);
};

/**
 * Version directive factory.
 *
 * @return {function}
 */
jxsprsec.district.Filter.factory = function(constants) {
    var filter = new jxsprsec.district.Filter(constants);
    return filter.convert;
};

/**
 * Convert truthy and falsy values to unicode symbols.
 *
 * @param {string} input
 */
jxsprsec.district.Filter.prototype.convert = function(input) {
    if(isNaN(input)){
        return '';
    }else {
        var districts = this.gotDISTRICTS();
        var district = districts.filter(function(item){return input === item.district_id});
        return district.length > 0 ? district[0].district_name : '';
    }
};

/***********************************************************************************/
goog.provide('jxsprsec.province.Filter.factory');

/**
 * Convert boolean values to unicode checkmark or cross.
 *
 * @constructor
 */
jxsprsec.province.Filter = function(constants) {
    this.gotPROVINCES = constants.gotPROVINCES;
    this.convert = this.convert.bind(this);
};

/**
 * Version directive factory.
 *
 * @return {function}
 */
jxsprsec.province.Filter.factory = function(constants) {
    var filter = new jxsprsec.province.Filter(constants);
    return filter.convert;
};

/**
 * Convert truthy and falsy values to unicode symbols.
 *
 * @param {string} input
 */
jxsprsec.province.Filter.prototype.convert = function(input) {
    if(isNaN(input)){
        return '';
    }else {
        var provinces = this.gotPROVINCES();
        var province = provinces.filter(function(item){return input === item.province_id});
        return province.length > 0 ? province[0].province_name : '';
    }
};

/***********************************************************************************/
goog.provide('jxsprsec.city.Filter.factory');

/**
 * Convert boolean values to unicode checkmark or cross.
 *
 * @constructor
 */
jxsprsec.city.Filter = function(constants) {
    this.gotCITIES= constants.gotCITIES;
    this.convert = this.convert.bind(this);
};

/**
 * Version directive factory.
 *
 * @return {function}
 */
jxsprsec.city.Filter.factory = function(constants) {
    var filter = new jxsprsec.city.Filter(constants);
    return filter.convert;
};

/**
 * Convert truthy and falsy values to unicode symbols.
 *
 * @param {string} input
 */
jxsprsec.city.Filter.prototype.convert = function(input) {
    if(isNaN(input)){
        return '';
    }else {
        var cities = this.gotCITIES();
        var city = cities.filter(function(item){return input === item.city_id});
        return city.length > 0 ? city[0].city_name : '';
    }
};

/***********************************************************************************/
goog.provide('jxsprsec.zone.Filter.factory');

/**
 * Convert boolean values to unicode checkmark or cross.
 *
 * @constructor
 */
jxsprsec.zone.Filter = function(constants) {
    this.gotZONES = constants.gotZONES;
    this.convert = this.convert.bind(this);
};

/**
 * Version directive factory.
 *
 * @return {function}
 */
jxsprsec.zone.Filter.factory = function(constants) {
    var filter = new jxsprsec.zone.Filter(constants);
    return filter.convert;
};

/**
 * Convert truthy and falsy values to unicode symbols.
 *
 * @param {string} input
 */
jxsprsec.zone.Filter.prototype.convert = function(input) {
    if(isNaN(input)){
        return '';
    }else {
        var zones = this.gotZONES();
        var zone = zones.filter(function(item){return input === item.zone_id});
        return zone.length > 0 ? zone[0].zone_name : '';
    }
};
