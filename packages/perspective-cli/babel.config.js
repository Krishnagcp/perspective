module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    chrome: "74",
                    node: "15",
                    ios: "13",
                },
                modules: false,
                // useBuiltIns: "usage",
                // corejs: "3.19",
            },
        ],
    ],
    sourceType: "unambiguous",
    plugins: [["@babel/plugin-proposal-decorators", {legacy: true}]],
};
