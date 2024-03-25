export abstract class WakaCrawler<Book> {
  abstract fetchBooks(): Book[]
  abstract fetchBookDetail(bookId: string): Book
  abstract downloadBook(): void
  abstract downloadBooks(): void
}
