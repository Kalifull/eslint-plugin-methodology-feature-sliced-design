/**
 * @fileoverview Specific eslint plugin to follow FSD (Feature Sliced Design) frontend architecture rules.
 * @author Alexeu Vorona
 */

'use strict';

const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports.rules = requireIndex(__dirname + '/rules');
