module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
  ],
  // overrides: [
  //   {
  //     files: ["*.ts", "*.tsx"],
  //   },
  // ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      tsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  // ignorePatterns: [".eslintrc.js"],
  rules: {
    "react/jsx-indent": ["error", 4],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    // "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    // "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    // "no-underscore-dangle": "off",
    "max-len": [
      "warn",
      {
        ignoreComments: true,
        code: 120,
      },
    ],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
    "no-param-reassign": "off",
  },
};
