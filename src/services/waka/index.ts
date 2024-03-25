import puppeteer, { Browser, Page } from 'puppeteer'

const WAKA_HOST = 'https://waka.vn'

enum WakaRoute {
  NEWEST_BOOKS = '/moi-nhat'
}

export class WakaClient {
  browser: Browser

  constructor(browser: Browser) {
    this.browser = browser
  }

  async init() {
    this.browser = await puppeteer.launch({ headless: false })
  }

  async search(query: string) {
    const page = await this.browser.newPage()
    await page.setViewport({ width: 1080, height: 1024 })
    await page.goto('https://waka.vn/moi-nhat?content_type=1&page=1')
    await page.type('.devsite-search-field', query)
    await page.waitForSelector('.devsite-result-item-link')
    await page.click('.devsite-result-item-link')
    const textSelector = await page.waitForSelector('text/Customize and automate')
    return textSelector?.evaluate((el) => el.textContent)
  }

  async close() {
    await this.browser.close()
  }
}
