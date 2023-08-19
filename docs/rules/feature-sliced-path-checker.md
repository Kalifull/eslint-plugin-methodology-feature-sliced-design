# Checking relative imports in one FSD slice (`feature-sliced-path-checker`)

This rule forbids using a module import inside another module that is located on the same layer or on layers above.

## Rule Details

Examples of **incorrect** code for this rule:

```js
// File path C:/Users/project-name/src/features/send-comment
import { selectCommentsState } from 'features/model/selectors/select-comments-state;'
// Error: Within a single fragment, all import paths must be relative

// With alias: '@'
import { selectCommentsState } from '@/features/model/selectors/select-comments-state;'
// Error: Within a single fragment, all import paths must be relative
```

Examples of **correct** code for this rule:

```js
// File path C:/Users/project/src/features/send-comment
import { Button } from 'shared/ui;'

import { selectCommentsState } from '../../model/selectors/select-comments-state;'

// With option: alias: '@'
import { Button } from '@/shared/ui';

import { selectCommentsState } from '../../model/selectors/select-comments-state;'
```

### Rule Options

| Name                     | Description                                 |
| :----------------------- | :-------------------------------------------|
| alias                    | The alias with which the import path begins |

### Examples options settings

```js
// Example import path with alias - @/shared/...
"methodology-feature-sliced-design/feature-sliced-path-checker": ["error", { "alias": "@" }]
```
