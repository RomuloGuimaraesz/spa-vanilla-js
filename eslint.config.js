import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['src/**',],
    ignores: ["config/**","__tests__/**/**"],
    languageOptions: { globals: {...globals.browser, ...globals.node},ecmaVersion: 2021,
    sourceType: 'module',},
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended
];