const { chromium } = require('@playwright/test')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1280, height: 900 })

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
  await page.screenshot({ path: 'verify-top.png' })

  await page.goto('http://localhost:3000/menu', { waitUntil: 'networkidle' })
  await page.screenshot({ path: 'verify-menu.png' })

  await page.goto('http://localhost:3000/kodawari', { waitUntil: 'networkidle' })
  await page.screenshot({ path: 'verify-kodawari.png' })

  await browser.close()
  console.log('Done')
})()
