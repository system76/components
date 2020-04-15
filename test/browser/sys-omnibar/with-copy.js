import { Selector } from 'testcafe'

import { assertScreenshot, WIDTHS } from '../../utility/browser'

fixture`SysOmnibar With Copy`
  .page`http://localhost:9476/iframe.html?id=components-sysomnibar--with-copy&viewMode=story`

const omnibar = Selector('header')

test('screenshots', async (t) => {
  // https://github.com/eslint/eslint/issues/12117
  // eslint-disable-next-line no-unused-vars
  for (const width of WIDTHS) {
    await t.resizeWindow(width, 800)
    await assertScreenshot(omnibar, `sys-omnibar/with-copy-${width}`)
  }
})
