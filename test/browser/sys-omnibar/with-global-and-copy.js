import { Selector } from 'testcafe'

import { assertScreenshot } from '../../utility/browser'

fixture`SysOmnibar With Global And Copy`
  .page`http://localhost:9427/iframe.html?id=components-sysomnibar--with-global-and-copy&viewMode=story`

const omnibar = Selector('header')

test('screenshots', async (t) => {
  const widths = [320, 640, 1024, 2048]

  // https://github.com/eslint/eslint/issues/12117
  // eslint-disable-next-line no-unused-vars
  for (const width of widths) {
    await t.resizeWindow(width, 800)
    await assertScreenshot(t, omnibar, `sys-omnibar/with-global-and-copy-${width}`)
  }
})
