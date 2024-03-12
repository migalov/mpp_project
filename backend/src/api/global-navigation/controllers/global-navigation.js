'use strict';

/**
 * global-navigation controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::global-navigation.global-navigation');
