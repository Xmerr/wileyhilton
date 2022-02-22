const customWebpackConfig = require('../config/webpack.config.js')();

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-links',
        '@storybook/preset-scss',
    ],
    features: {
        emotionAlias: false,
    },
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: config => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    ...customWebpackConfig.resolve.alias,
                },
            },
            // module: {
            //     ...config.module,
            //     rules: [...config.module.rules, ...customWebpackConfig.module.rules],
            // },
        };
    },
};
