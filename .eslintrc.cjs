/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "import/no-anonymous-default-export": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-key": "error",
    "react/display-name": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "@next/next/no-img-element": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "react/jsx-no-bind": "off",
  },
  // overrides: [
  //   {
  //     files: ["next.config.js"],
  //     rules: {
  //       "@typescript-eslint/no-require-imports": "off",
  //     },
  //   },
  // ],
};
module.exports = config;
