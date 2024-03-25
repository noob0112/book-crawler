// import puppeteer from 'puppeteer'
// ;(async () => {
//   // Launch the browser and open a new blank page
//   const browser = await puppeteer.launch({ headless: false })
//   const page = await browser.newPage()

//   // Navigate the page to a URL
//   page.on('request', async (request) => {
//     const url = request.url()
//     console.log({ url })
//   })
//   await page.setViewport({ width: 1600, height: 1024 })
//   await page.goto('https://waka.vn/moi-nhat?content_type=1&page=1')
//   const bookDetailUrlSelector = '.container .grid >.col-span-1 a'
//   await page.waitForSelector(bookDetailUrlSelector)
//   const bookDetailUrlElements = await page.$$(bookDetailUrlSelector)
//   console.log(await bookDetailUrlElements[0].getProperties())

//   // Set screen size

//   //   Type into search box
//   //   await page.type('.devsite-search-field', 'automate beyond recorder');

//   //   // Wait and click on first result
//   //   const searchResultSelector = '.devsite-result-item-link';
//   //   await page.waitForSelector(searchResultSelector);
//   //   await page.click(searchResultSelector);

//   //   // Locate the full title with a unique string
//   //   const textSelector = await page.waitForSelector(
//   //     'text/Customize and automate'
//   //   );
//   //   const fullTitle = await textSelector?.evaluate(el => el.textContent);

//   //   // Print the full title
//   //   console.log('The title of this blog post is "%s".', fullTitle);

//   await browser.close()
// })()

// import crypto from 'crypto'

// const test = crypto.randomBytes(16).toString('hex')

// console.log(test)
import { AxiosCrawler } from '#/services/waka/crawlers/axios'

const axiosCraler = new AxiosCrawler()
;(async () => {
  const { data: bookDetail } = await axiosCraler.getBookDetail()
  console.log(bookDetail)
})()
