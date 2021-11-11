import { Selector } from 'testcafe'

import { assertScreenshot, WIDTHS } from '../../utility/browser'

fixture`SysHeaderbar retro`
  .page`http://localhost:9476/iframe.html?id=components-sysheaderbar--retro&viewMode=story`

const header = Selector('nav')

test('screenshots', async (t) => {
  // https://github.com/eslint/eslint/issues/12117
  // eslint-disable-next-line no-unused-vars
  for (const width of WIDTHS) {
    await t.resizeWindow(width, 800)
    await assertScreenshot(header, `sys-headerbar/retro-${width}`)
  }
})
