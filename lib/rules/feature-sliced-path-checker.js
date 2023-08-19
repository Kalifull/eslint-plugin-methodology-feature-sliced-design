/**
 * @fileoverview Checking relative imports in one FSD slice.
 * @author Alexeu Vorona
 */

'use strict';

const { isPathRelative, getNormalizedPath } = require('../utils');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    messages: {
      relativeImports: 'Within a single fragment, all import paths must be relative',
    },
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'Checking relative imports in one FSD slice',
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [
      {
        type: 'object',
        properties: {
          alias: {
            type: 'string',
          },
        },
      },
    ], // Add a schema if the rule has options
  },

  create(context) {
    const alias = context.options[0]?.alias ?? '';

    return {
      ImportDeclaration(node) {
        const currentPath = context.filename;

        const value = node.source.value;
        const importPath = alias ? value.replace(`${alias}/`, '') : value;

        if (isPathShouldBeRelative(currentPath, importPath)) {
          context.report({ node, messageId: 'relativeImports' });
        }
      },
    };
  },
};

const layers = {
  shared: 'shared',
  entities: 'entities',
  features: 'features',
  widgets: 'widgets',
  pages: 'pages',
  app: 'app',
};

const isPathShouldBeRelative = (currentPath, importPath) => {
  if (isPathRelative(importPath)) {
    return false;
  }

  const fromArray = getNormalizedPath(currentPath);
  const currentLayer = fromArray[1];
  const currentSlice = fromArray[2];

  if (!currentLayer || !currentSlice || !layers[currentLayer]) {
    return false;
  }

  const [importLayer, importSlice] = importPath.split('/');

  if (!importLayer || !importSlice || !layers[importLayer]) {
    return false;
  }

  return currentLayer === importLayer && currentSlice === importSlice;
};
