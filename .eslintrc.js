module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ["plugin:prettier/recommended", "plugin:react/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier", "@emotion"],
  rules: {
    "max-len": ["error", { code: 120 }],
    "react/prop-types": "off",
    "@emotion/jsx-import": "error",
  },
  settings: {
    jest: {
      version: 26,
    },
  },
  overrides: [
    {
      files: ["webpack.config.js"],
      rules: {},
    },
  ],
};
