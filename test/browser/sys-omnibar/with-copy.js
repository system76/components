import { Selector } from 'testcafe'

import { assertScreenshot } from '../../utility/browser'

fixture`Image Hero`
  .page`http://localhost:9427/iframe.html?id=components-sysomnibar--with-copy&viewMode=story`

const omnibar = Selector('header')

test('spans the full width', async (t) => {
  const widths = [320, 640, 1024, 2048]

  // https://github.com/eslint/eslint/issues/12117
  // eslint-disable-next-line no-unused-vars
  for (const width of widths) {
    await t.resizeWindow(width, 800)
    await assertScreenshot(t, omnibar, `with-copy-${width}`)
  }
})
