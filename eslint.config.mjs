import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    ignores: [
      `**/dist/*`
    ]
  },
  {
    "rules": {
      "semi": [
        2,
        `always`
      ],
      "array-bracket-spacing": [
        2,
        `always`
      ],
      "no-const-assign": 2,
      "no-var": `error`,
      "indent": [
        2,
        2
      ],
      "quotes": [
        2,
        `backtick`
      ],
      "global-require": 2,
      "no-console": [
        0
      ],
      "no-unused-vars": `off`,
      "no-constant-condition": `off`,
    }
  }
];