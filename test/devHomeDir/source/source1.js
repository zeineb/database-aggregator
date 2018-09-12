'use strict';

/** @type {import('../../../src/types').ISourceConfigFile} */
const source = {
  copyCronRule: '*/5 * * * *',
  driver: require('../driver/constantUpdates')
};

module.exports = source;
