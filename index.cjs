"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _eslintPluginReact = _interopRequireDefault(require("eslint-plugin-react"));
var _eslintPluginReactHooks = _interopRequireDefault(require("eslint-plugin-react-hooks"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = [{
  files: ["**/*.jsx", "**/*.tsx"],
  languageOptions: {
    ..._eslintPluginReact.default.configs.recommended.languageOptions
  },
  plugins: {
    react: _eslintPluginReact.default,
    "react-hooks": _eslintPluginReactHooks.default
  },
  rules: {
    ..._eslintPluginReact.default.configs.recommended.rules,
    "react/jsx-indent": ["warn", 4],
    "react/jsx-indent-props": ["warn", 4],
    "react/jsx-no-useless-fragment": ["warn", {
      "allowExpressions": true
    }],
    "react/jsx-curly-brace-presence": "warn",
    "react/jsx-boolean-value": "warn",
    "react/self-closing-comp": "warn",
    "react/button-has-type": "warn",
    "react/no-unstable-nested-components": "warn",
    "react/jsx-no-constructed-context-values": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/void-dom-elements-no-children": "warn",
    "react/jsx-filename-extension": ["warn", {
      extensions: [".jsx", ".tsx"]
    }],
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-first-prop-new-line": "warn",
    "react/jsx-tag-spacing": "warn",
    "react/jsx-curly-spacing": "warn",
    "react/jsx-max-props-per-line": "warn",
    "react/jsx-equals-spacing": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/state-in-constructor": "off",
    "react-hooks/rules-of-hooks": "warn"
  }
}];
