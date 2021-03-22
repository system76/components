import { Selector } from 'testcafe'

import { assertScreenshot, WIDTHS } from '../../utility/browser'

fixture`SysFooterbar with button`
  .page`http://localhost:9476/iframe.html?id=components-sysfooterbar--with-button&viewMode=story`

const header = Selector('footer')

test('screenshots', async (t) => {
  // https://github.com/eslint/eslint/issues/12117
  // eslint-disable-next-line no-unused-vars
  for (const width of WIDTHS) {
    await t.resizeWindow(width, 800)
    await assertScreenshot(header, `sys-footerbar/with-button-${width}`)
  }
})
