/**
 * src/components/sys-omnibar.stories.js
 * Storybook examples of the omnibar.
 */

import SysOmnibar from './sys-omnibar'

export default {
  title: 'Components|SysOmnibar',
  component: SysOmnibar
}

export const WithCopy = () => ({
  components: { SysOmnibar },
  template: `
    <SysOmnibar>
      <template slot="copy">
        New announcement!
      </template>
    </SysOmnibar>
  `
})

export const WithCopyAndPrice = () => ({
  components: { SysOmnibar },
  template: `
    <SysOmnibar>
      <template slot="copy">
        New announcement!
      </template>
      <template slot="price">
        $999
      </template>
    </SysOmnibar>
  `
})

export const WithGlobalAndCopy = () => ({
  components: { SysOmnibar },
  template: `
    <SysOmnibar>
      <template slot="global">
        <a href="#">
          View Specials!
        </a>
      </template>
      <template slot="copy">
        New announcement!
      </template>
    </SysOmnibar>
  `
})

export const WithGlobalAndLocal = () => ({
  components: { SysOmnibar },
  template: `
    <SysOmnibar>
      <template slot="global">
        <a href="#">
          View Specials
        </a>
      </template>
      <template slot="local">
        <button>
          Add to cart!
        </button>
      </template>
    </SysOmnibar>
  `
})

export const WithCopyAndLocal = () => ({
  components: { SysOmnibar },
  template: `
    <SysOmnibar>
      <template slot="copy">
        New announcement!
      </template>
      <template slot="local">
        <a href="#">
          Add to cart!
        </a>
      </template>
    </SysOmnibar>
  `
})

export const WithPriceAndLocal = () => ({
  components: { SysOmnibar },
  template: `
    <SysOmnibar>
      <template slot="price">
        $999
      </template>
      <template slot="local">
        <a href="#">
          Add to cart!
        </a>
      </template>
    </SysOmnibar>
  `
})

export const WithCopyGlobalAndLocal = () => ({
  components: { SysOmnibar },
  template: `
    <SysOmnibar>
      <template slot="global">
        <a href="#">
          View Specials
        </a>
      </template>
      <template slot="copy">
        New announcement!
      </template>
      <template slot="local">
        <a href="#">
          Add to cart!
        </a>
      </template>
    </SysOmnibar>
  `
})

export const WithEverything = () => ({
  components: { SysOmnibar },
  template: `
    <SysOmnibar>
      <template slot="global">
        <a href="#">
          View Specials
        </a>
      </template>
      <template slot="copy">
        New announcement!
      </template>
      <template slot="price">
        $999
      </template>
      <template slot="local">
        <a href="#">
          Add to cart!
        </a>
      </template>
    </SysOmnibar>
  `
})
