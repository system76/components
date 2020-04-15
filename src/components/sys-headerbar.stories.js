/**
 * src/components/sys-headerbar.stories.js
 * Storybook examples of the headerbar.
 */

import SysHeaderbar from './sys-headerbar'

export default {
  title: 'Components|SysHeaderbar',
  component: SysHeaderbar
}

export const NotLoggedIn = () => ({
  components: { SysHeaderbar },
  template: `
    <SysHeaderbar />
  `
})

export const LoggedInUser = () => ({
  components: { SysHeaderbar },
  template: `
    <SysHeaderbar :authenticated="true" />
  `
})

export const LoggedInAdmin = () => ({
  components: { SysHeaderbar },
  template: `
    <SysHeaderbar :authenticated="true" :admin="true" />
  `
})
