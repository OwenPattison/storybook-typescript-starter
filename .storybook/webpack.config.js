module.exports = (baseConfig, config, defaultConfig) => {

    defaultConfig.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            require.resolve("awesome-typescript-loader"),
            require.resolve("react-docgen-typescript-loader"),
        ]
    });

    defaultConfig.resolve.extensions.push(".ts", ".tsx");

    return defaultConfig;
};
