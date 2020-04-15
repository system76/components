import { Selector } from 'testcafe'

import { assertScreenshot, WIDTHS } from '../../utility/browser'

fixture`SysHeaderbar logged in admin`
  .page`http://localhost:9476/iframe.html?id=components-sysheaderbar--logged-in-admin&viewMode=story`

const header = Selector('nav')

test('screenshots', async (t) => {
  // https://github.com/eslint/eslint/issues/12117
  // eslint-disable-next-line no-unused-vars
  for (const width of WIDTHS) {
    await t.resizeWindow(width, 800)
    await assertScreenshot(header, `sys-headerbar/logged-in-admin-${width}`)
  }
})
