# eslint-plugin-methodology-feature-sliced-design

Specific eslint plugin to follow [FSD methodology](https://feature-sliced.design/docs/get-started/overview) (Feature Sliced Design) frontend architecture documentation.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i -D eslint
```

Next, install `eslint-plugin-methodology-feature-sliced-design`:

```sh
npm i -D eslint-plugin-methodology-feature-sliced-design
```

## Usage

Add `methodology-feature-sliced-design` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "methodology-feature-sliced-design"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "methodology-feature-sliced-design/rule-name": 2
    }
}
```

## List of supported rules

<!-- begin auto-generated rules list -->

| Name                                                                     | Description                                |
| :------------------------------------------------------------------------| :----------------------------------------- |
| [feature-sliced-path-checker](docs/rules/feature-sliced-path-checker.md) | Checking relative imports in one FSD slice |
