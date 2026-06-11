const { chromium } = require('@playwright/test')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1280, height: 900 })

  const errors = []
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) })

  await page.goto('http://localhost:3000/menu', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2000)

  // Check computed styles on the photo container in the crepe section
  const info = await page.evaluate(() => {
    const crepeSection = document.querySelector('#crepe')
    if (!crepeSection) return 'no crepe section'
    const grid = crepeSection.querySelector('.grid')
    if (!grid) return 'no grid'
    const gridStyle = window.getComputedStyle(grid)
    const photoWrapper = grid.firstElementChild
    const photoWrapperStyle = window.getComputedStyle(photoWrapper)
    const aspectDiv = photoWrapper?.firstElementChild
    const aspectDivStyle = aspectDiv ? window.getComputedStyle(aspectDiv) : null
    return {
      gridDisplay: gridStyle.display,
      gridTemplateColumns: gridStyle.gridTemplateColumns,
      photoWrapperWidth: photoWrapperStyle.width,
      photoWrapperHeight: photoWrapperStyle.height,
      aspectDivWidth: aspectDivStyle?.width,
      aspectDivHeight: aspectDivStyle?.height,
      aspectDivAspectRatio: aspectDivStyle?.aspectRatio,
      aspectDivPosition: aspectDivStyle?.position,
    }
  })

  console.log('Grid info:', JSON.stringify(info, null, 2))
  console.log('Console errors:', errors)

  await browser.close()
})()
