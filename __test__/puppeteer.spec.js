const puppeteer = require('puppeteer')

describe('jest-image-snapshot', () => {
  let browser

  beforeAll(async () => {
    browser = await puppeteer.launch()
  })

  it('works', async () => {
    const page = await browser.newPage()
    await page.goto(`https://cicd-snapshot-frontend.vercel.app/`)
    const image = await page.screenshot({ path: 'screenshot.png' })
    console.log("===========hhhhhh",image)
    expect(image).toMatchImageSnapshot()
  })

  afterAll(async () => {
    await browser.close()
  })
})
