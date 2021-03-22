/**
 * src/components/sys-footerbar.stories.js
 * Storybook examples of the System76 footer.
 */

import SysFooterbar from './sys-footerbar'

export default {
  title: 'Components|SysFooterbar',
  component: SysFooterbar
}

export const Default = () => ({
  components: { SysFooterbar },
  template: `
    <SysFooterbar />
  `
})

export const WithText = () => ({
  components: { SysFooterbar },
  template: `
    <SysFooterbar>
      100% made in Colorado
    </SysFooterbar>
  `
})

export const WithButton = () => ({
  components: { SysFooterbar },
  template: `
    <SysFooterbar :show-newsletter-button="true" />
  `
})
