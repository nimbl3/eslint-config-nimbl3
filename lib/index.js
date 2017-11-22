/**
 * @fileoverview eslint config developed and maintained by Nimble Thailand.
 * @author Abhinav Mishra
 */
"use strict";

module.exports = {
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "impliedStrict": true
    },
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "node": true
  },
  "globals": {
    "document": false,
    "navigator": false,
    "window": false
  },
  extends: [
    './rules/base',
    './rules/react'
  ].map(require.resolve),
  rules: {}
};