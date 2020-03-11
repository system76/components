import '@system76/design/dist/index.common.css'
import '../src/assets/styles/main.css'

import { withA11y } from '@storybook/addon-a11y'
import { addDecorator, addParameters } from '@storybook/vue'

import { theme } from './theme'

addDecorator(withA11y)
addParameters({
  options: { theme }
})
