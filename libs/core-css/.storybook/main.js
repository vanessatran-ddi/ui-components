module.exports = {
    stories: ['../src/lib/**/*.stories.js'],
    addons: [
      {
        name: '@storybook/addon-docs',
        options: {
        }
      },
      '@storybook/addon-backgrounds',
      '@storybook/addon-a11y/register',
      '@storybook/addon-viewport',
      'storybook-addon-xd-designs'
    ]
};