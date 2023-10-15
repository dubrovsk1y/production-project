module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:i18next/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next", "react-hooks"],
  rules: {
    "import/no-unresolved": [0],
    "import/extensions": [0],
    "import/prefer-default-export": [0],
    "react/function-component-definition": [0],
    "react/require-default-props": [0],
    "react/react-in-jsx-scope": [0],
    "no-shadow": [0],
    "import/no-extraneous-dependencies": [0],
    "no-underscore-dangle": [0],
    "object-curly-newline": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    "no-param-reassign": [0],
    "no-unused-vars": [1],
    "react/jsx-props-no-spreading": [1],
    "react-hooks/exhaustive-deps": [2],
    "react-hooks/rules-of-hooks": [2],
    "react/jsx-filename-extension": [2, { extensions: [".tsx"] }],
    "i18next/no-literal-string": [2, { markupOnly: true, ignoreAttribute: ["data-testid", "to"] }],
    "max-len": [2, { ignoreComments: true, code: 100 }],
    quotes: [2, "double"],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": [0],
        "max-len": [0],
      },
    },
  ],
};
