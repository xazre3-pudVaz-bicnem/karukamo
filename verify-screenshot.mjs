import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage()
await page.setViewportSize({ width: 1280, height: 900 })

// Top page
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
await page.screenshot({ path: 'verify-top.png', fullPage: false })

// Scroll down to see more sections
await page.evaluate(() => window.scrollTo(0, 600))
await page.waitForTimeout(500)
await page.screenshot({ path: 'verify-top-scroll.png' })

// Menu page
await page.goto('http://localhost:3000/menu', { waitUntil: 'networkidle' })
await page.screenshot({ path: 'verify-menu.png', fullPage: false })

// Kodawari page
await page.goto('http://localhost:3000/kodawari', { waitUntil: 'networkidle' })
await page.screenshot({ path: 'verify-kodawari.png', fullPage: false })

await browser.close()
console.log('Screenshots saved.')
