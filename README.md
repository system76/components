<div align="center">
  <h1>@system76/components</h1>
  <h3>System76 standard Vue components</h3>
  <br>
  <br>
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/@system76/components/">
    <img src="https://img.shields.io/npm/v/@system76/components.svg" alt="npm">
  </a>

  <a href="https://renovatebot.com/">
    <img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" alt="renovate">
  </a>

  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="standard">
  </a>

  <a href="https://components.origin76.com/">
    <img src="https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg" alt="Storybook">
  </a>
</p>

---

This repository contains a bunch of standard System76 Vue components, like the
omnibar, the header, the footer, and a couple of others. It _does not_ include
all Vue components that System76 uses, as those are broken up into other
repositories like:

- [asset-components](https://github.com/system76/asset-components) Vue
  components to display image assets.
- [design](https://github.com/system76/design) CSS variables and Vue typography
- [forms](https://github.com/system76/forms) Vue components for forms

## Using

```
npm install --save-dev @system76/components
```

Then simply import and use them like you would any other Vue library:

```vue
<template>
  <sys-omnibar />
</template>

<script>
import { SysOmnibar } from '@system76/components'

export default {
  components: {
    SysOmnibar
  }
}
</script>
```

For actual usage and documentation, please look at our
[storybook instance](https://components.origin76.com).

## Development

1) Download the repository

2) Run `npm ci`

3) Run `npm run build`

4) Run `npm start`

5) Start hacking

### Documenting

We use styleguide to document our components. Please write your own stories
and documentation in markdown format like the other `.mdx` files. Along with
storybook, we also use styleguidist for documentation in the component file.
This gets outputted in the form of nice prop tables in storybook. Here are some
resources on how to get started:

- [Storybook markdown syntax](https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/mdx.md)
- [vue-docgen-api](https://github.com/vue-styleguidist/vue-styleguidist/tree/dev/packages/vue-docgen-api#full-example)

## Deployment

To [trigger a release](https://semantic-release.gitbook.io/semantic-release/#triggering-a-release),
push a commit to the `master` branch in the
[Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
format.
