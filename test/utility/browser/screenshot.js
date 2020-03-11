/**
 * test/utility/browser/screenshot.js
 * Takes a screenshot and asserts the difference
 */

import * as fs from 'fs'
import { uptime } from 'os'
import * as path from 'path'
import Rembrandt from 'rembrandt'

const resolve = (name) => path.resolve(__dirname, '../../screenshots', name)
const tempFile = () => `tmp/${uptime()}.png`
const fixtureFile = (name) => `tests/${name}.png`

function fileExists (path) {
  return new Promise((resolve, reject) => {
    fs.stat(resolve(path), (err, stat) => {
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

async function takeFixtureScreenshot (t, el, path) {
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
    const currentImage = await takeFixtureScreenshot(t, el, tempFile())

    const rembrandt = new Rembrandt({
      imageA: resolve(fixture),
      imageB: resolve(currentImage),

      thresholdType: Rembrandt.THRESHOLD_PERCENT,
      maxThreshold: 0.01,
      maxDelta: 20,
      maxOffset: 0
    })

    const result = await rembrandt.compare()

    if (!result.passed) {
      throw new Error('Image did not pass test threshold')
    }
  } else {
    await takeFixtureScreenshot(t, el, fixture)
  }
}
