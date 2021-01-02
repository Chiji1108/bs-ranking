const path = require("path");

const css_regex = "/\\.css$/";

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, "styled-jsx/babel"],
    // any extra options you want to set
  }),
  webpackFinal: (config) => {
    const cssRule = config.module.rules.find(
      (rule) => rule.test.toString() === css_regex
    );
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        "style-loader",
        { loader: "css-loader", options: { importLoaders: 1, modules: true } },
        "postcss-loader",
      ],
    });
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules.filter(
            (rule) => rule.test.toString() !== css_regex
          ),
          {
            ...cssRule,
            exclude: /\.module\.css$/,
          },
        ],
      },
    };
  },
};
