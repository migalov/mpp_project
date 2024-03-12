'use strict';

/**
 * global-navigation router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-navigation.global-navigation');
