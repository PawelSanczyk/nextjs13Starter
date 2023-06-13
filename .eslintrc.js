module.exports = {
  "ignorePatterns": ["*.spec.tsx", "*.spec.ts", "**/stories/**", // nie lintujemy testów ani stories
  ".eslintrc.js", "config-overrides.js", // nie lintujemy konfiguracji
  "**/setup/**" // nie lintujemy zewnętrznych setupów
  ],

  "extends": ["react-app", "react-app/jest", "plugin:jsx-a11y/recommended", "plugin:storybook/recommended"],
  "rules": {
    "no-shadow": "error",
    "prefer-const": "warn",
    "no-console": "warn",
    "@typescript-eslint/prefer-readonly": "off",
    "@typescript-eslint/no-implicit-any-catch": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-expressions": "off"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname
  }
};