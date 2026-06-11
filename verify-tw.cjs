const { chromium } = require('@playwright/test')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1280, height: 900 })

  await page.goto('http://localhost:3000/menu', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)

  const info = await page.evaluate(() => {
    // Test: create a div with known Tailwind classes and check computed styles
    const test = document.createElement('div')
    test.className = 'relative aspect-[3/4] overflow-hidden grid'
    document.body.appendChild(test)
    const cs = window.getComputedStyle(test)
    const result = {
      position: cs.position,
      aspectRatio: cs.aspectRatio,
      overflow: cs.overflow,
      display: cs.display,
    }
    document.body.removeChild(test)

    // Also check if the stylesheet has the rules
    const allText = [...document.styleSheets].flatMap(s => {
      try { return [...s.cssRules].map(r => r.cssText) }
      catch { return [] }
    })
    const hasRelative = allText.some(t => t.includes('.relative'))
    const hasGrid = allText.some(t => t.includes('.grid'))

    return { testDiv: result, hasRelative, hasGrid, stylesheetCount: document.styleSheets.length }
  })

  console.log(JSON.stringify(info, null, 2))
  await browser.close()
})()
