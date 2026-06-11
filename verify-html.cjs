const { chromium } = require('@playwright/test')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1280, height: 900 })

  await page.goto('http://localhost:3000/menu', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)

  const info = await page.evaluate(() => {
    const crepeSection = document.querySelector('#crepe')
    const grid = crepeSection?.querySelector('.grid')
    const children = grid ? [...grid.children].map(c => ({
      tag: c.tagName,
      class: c.className,
      firstChildTag: c.firstElementChild?.tagName,
      firstChildClass: c.firstElementChild?.className,
      computedPosition: window.getComputedStyle(c.firstElementChild || c).position,
      computedAspect: window.getComputedStyle(c.firstElementChild || c).aspectRatio,
      computedDisplay: window.getComputedStyle(c).display,
      offsetWidth: c.offsetWidth,
    })) : []

    // Also check the actual image
    const img = crepeSection?.querySelector('img')
    const imgStyle = img ? window.getComputedStyle(img) : null

    return {
      gridHTML: grid?.outerHTML?.substring(0, 400),
      gridChildren: children,
      imgSrc: img?.src,
      imgPosition: imgStyle?.position,
      imgWidth: imgStyle?.width,
      imgHeight: imgStyle?.height,
    }
  })

  console.log(JSON.stringify(info, null, 2))
  await browser.close()
})()
