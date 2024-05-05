import { Book, CrawlStatus } from '#modules/book/book.schema.ts'

export async function upsertSummaryBook(summaryBook: any) {
  const filter = { id: summaryBook.id, crawlStatus: CrawlStatus.READY }

  return Book.findOneAndUpdate(filter, summaryBook, {
    new: true,
    upsert: true,
  })
}

export async function updateWhenCrawlFailed(bookId: number, options = { new: true }) {
  const filter = { id: bookId }
  const update = { crawlStatus: CrawlStatus.READY }

  return Book.findOneAndUpdate(filter, update, options)
}

export async function updateDetailBook(detailBook: any) {
  const filter = { id: detailBook.id }
  const update = {
    ...detailBook,
    crawlStatus: CrawlStatus.FINISHED,
  }

  return Book.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true,
  })
}

export async function getBookToCrawlDetailedBook() {
  const filter = { crawlStatus: CrawlStatus.READY }
  const update = { crawlStatus: CrawlStatus.RUNNING }

  return Book.findOneAndUpdate(filter, update, {
    new: true,
  })
}

export async function getSummaryBook(conditions = {}, projection = {}, options = {}) {
  return Book.findOne({ ...conditions, crawlStatus: CrawlStatus.READY }, projection, options)
}
