'use strict';

/**
 * global-navigation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-navigation.global-navigation');
