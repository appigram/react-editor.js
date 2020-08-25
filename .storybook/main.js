const path = require('path')

/**
 * Docs
 * @see https://storybook.js.org/docs/configurations
 */
module.exports = {
  stories: ['../src/**/__stories__/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    'storybook-readme',
    '@storybook/addon-knobs/register',
  ],
}
