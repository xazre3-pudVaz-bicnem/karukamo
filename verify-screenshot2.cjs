const { chromium } = require('@playwright/test')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1280, height: 900 })

  // Top page full
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  await page.screenshot({ path: 'verify-top-full.png', fullPage: true })

  // Menu page full
  await page.goto('http://localhost:3000/menu', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  await page.screenshot({ path: 'verify-menu-full.png', fullPage: true })

  await browser.close()
  console.log('Done')
})()
