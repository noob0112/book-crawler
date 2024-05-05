import { AxiosCrawler } from '#services/waka/crawlers/axios.ts'
import { getRandomIntInclusive, sleep } from '#utils.ts'
import {
  getBookToCrawlDetailedBook,
  getSummaryBook,
  updateDetailBook,
  updateWhenCrawlFailed,
  upsertSummaryBook,
} from './book.user-case.ts'

export async function crawlSummaryBook() {
  const axiosCraler = new AxiosCrawler()

  for (let pageNo = 260; pageNo < 396; pageNo++) {
    const { data: summaryBooks } = await axiosCraler.getSummaryBooks({ pageNo })

    console.log(`pageNo ${pageNo}: ${summaryBooks.data?.length} records`)

    for (const summaryBook of summaryBooks.data) {
      // await queue.add(async () => upsertSummaryBook(summaryBook))
      await upsertSummaryBook(summaryBook)
    }

    const sleepTime = getRandomIntInclusive(10000, 20000)
    await sleep(sleepTime)
  }
}

export async function crawlBookDetailsWithOneThread() {
  let isRunCrawler = true

  while (isRunCrawler) {
    const book = await getBookToCrawlDetailedBook()

    if (!book) {
      isRunCrawler = false
      break
    }

    await crawlBookDetail(book.id)

    const sleepTime = getRandomIntInclusive(10000, 20000)
    await sleep(sleepTime)
  }
}

export async function crawlBookDetail(bookId: number) {
  const axiosCraler = new AxiosCrawler()

  try {
    const detailedBook = await axiosCraler.getBookDetail(bookId)

    if (!detailedBook) {
      throw new Error()
    }

    await updateDetailBook(detailedBook)
    console.log(`bookid ${bookId}: Crawl successfully`)
  } catch (error) {
    await updateWhenCrawlFailed(bookId)
    console.log(`bookid ${bookId}: Crawl false`)
  }
}
