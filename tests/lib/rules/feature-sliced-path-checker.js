/**
 * @fileoverview Checking relative imports in one FSD slice.
 * @author Alexeu Vorona
 */

'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/feature-sliced-path-checker'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('feature-sliced-path-checker', rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: '',
      errors: [{ message: 'Fill me in.', type: 'Me too' }],
    },
  ],
});
