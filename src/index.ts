import { connectMongodb } from '#databases/mongodb/index.ts'
import { crawlBookDetailsWithOneThread } from '#modules/book/book.controller.ts'

await connectMongodb()

await crawlBookDetailsWithOneThread()
