import { Selector } from 'testcafe'

import { assertScreenshot } from '../../utility/browser'

fixture`SysOmnibar With Copy And Local`
  .page`http://localhost:9476/iframe.html?id=components-sysomnibar--with-copy-and-local&viewMode=story`

const omnibar = Selector('header')

test('screenshots', async (t) => {
  const widths = [320, 640, 1024, 1800]

  // https://github.com/eslint/eslint/issues/12117
  // eslint-disable-next-line no-unused-vars
  for (const width of widths) {
    await t.resizeWindow(width, 800)
    await assertScreenshot(omnibar, `sys-omnibar/with-copy-and-local-${width}`)
  }
})
