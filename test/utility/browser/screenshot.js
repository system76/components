/**
 * test/utility/browser/screenshot.js
 * Takes a screenshot and asserts the difference
 */

import * as fs from 'fs'
import { uptime } from 'os'
import * as path from 'path'
import looksSame from 'looks-same'

const abs = (name) => path.resolve(__dirname, '../../screenshots', name)
const tempFile = () => `tmp/${uptime()}.png`
const fixtureFile = (name) => `tests/${name}.png`

function fileExists (path) {
  return new Promise((resolve, reject) => {
    fs.stat(abs(path), (err, stat) => {
      if (err == null) {
        return resolve(stat.isFile())
      } else if (err.code === 'ENOENT') {
        return resolve(false)
      } else {
        return reject(err)
      }
    })
  })
}

async function takeScreenshot (t, el, path) {
  await t.takeElementScreenshot(el, path, {
    includeBorders: true,
    includeMargins: false,
    includePaddings: true
  })

  return path
}

export async function assertScreenshot (t, el, name) {
  const fixture = fixtureFile(name)
  const fixtureExists = await fileExists(fixture)

  if (fixtureExists) {
    const currentImage = await takeScreenshot(t, el, tempFile())

    const options = {
      ignoreAntialiasing: true
    }

    const result = await new Promise((resolve, reject) => {
      looksSame(abs(fixture), abs(currentImage), options, (err, data) => {
        if (err != null) {
          return reject(err)
        } else {
          return resolve(data)
        }
      })
    })

    await t.expect(result.equal).ok(`Current screenshot matches ${name}`)
  } else {
    await takeScreenshot(t, el, fixture)
  }
}
