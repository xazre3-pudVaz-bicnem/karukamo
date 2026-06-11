const { chromium } = require('@playwright/test')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1280, height: 900 })

  await page.goto('http://localhost:3000/menu', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)

  const cssInfo = await page.evaluate(() => {
    // Find if .relative and .aspect-\\[3\\/4\\] rules exist in any stylesheet
    const rules = []
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          const text = rule.cssText || ''
          if (text.includes('relative') || text.includes('aspect') || text.includes('overflow')) {
            rules.push(text.substring(0, 120))
          }
        }
      } catch(e) {}
    }

    // Also check the actual classes on the element
    const crepeSection = document.querySelector('#crepe')
    const grid = crepeSection?.querySelector('.grid')
    const photoWrapper = grid?.firstElementChild
    const aspectDiv = photoWrapper?.firstElementChild

    return {
      matchingRulesCount: rules.length,
      sampleRules: rules.slice(0, 5),
      aspectDivClasses: aspectDiv?.className,
      gridClasses: grid?.className,
    }
  })

  console.log(JSON.stringify(cssInfo, null, 2))
  await browser.close()
})()
