const { chromium } = require('@playwright/test')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1280, height: 900 })

  await page.goto('http://localhost:3000/menu', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2000)

  const info = await page.evaluate(() => {
    // Test custom CSS classes
    const test = document.createElement('div')
    test.className = 'photo-portrait'
    document.body.appendChild(test)
    const cs = window.getComputedStyle(test)
    const result = {
      position: cs.position,
      aspectRatio: cs.aspectRatio,
      overflow: cs.overflow,
    }
    document.body.removeChild(test)

    // Check actual photo-portrait on page
    const photoPortrait = document.querySelector('.photo-portrait')
    const pcs = photoPortrait ? window.getComputedStyle(photoPortrait) : null

    return {
      testDiv: result,
      liveElement: pcs ? {
        position: pcs.position,
        aspectRatio: pcs.aspectRatio,
        overflow: pcs.overflow,
        width: pcs.width,
        height: pcs.height,
      } : 'not found'
    }
  })

  console.log(JSON.stringify(info, null, 2))
  await browser.close()
})()
