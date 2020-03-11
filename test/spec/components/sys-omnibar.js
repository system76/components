/**
 * test/spec/components/sys-button.js
 * Tests sys-button component
 */

import { mount } from '@vue/test-utils'
import test from 'ava'

import SysOmnibar from '../../../src/components/sys-omnibar.vue'

test('it adds button class to global slot', (t) => {
  const wrapper = mount(SysOmnibar, {
    slots: { global: '<span />' }
  })
  const span = wrapper.get('span')

  t.true(span.element._prevClass.includes('-style-button'))
})

test('it adds button class to local slot', (t) => {
  const wrapper = mount(SysOmnibar, {
    slots: { local: '<span />' }
  })
  const span = wrapper.get('span')

  t.true(span.element._prevClass.includes('-style-button'))
})
