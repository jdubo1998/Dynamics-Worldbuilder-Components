const tseslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const powerApps = require("@microsoft/eslint-plugin-power-apps");

module.exports = [
  {
    files: ["src/**/*.ts"],
    ignores: ["dist/**/*"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },

    plugins: {
      "@typescript-eslint": tseslint,
      "@microsoft/power-apps": powerApps
    },

    rules: {
        
    }
  }
];
