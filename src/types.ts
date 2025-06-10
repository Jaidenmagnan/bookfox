export interface Book {
  id: string;
  volumeInfo: {
    title: string;
  };
}
export interface BooksResponse {
  items: Book[];
}
export interface BookshelfBook {
  bookshelfId: string;
  googleBooksId: string;
}

export interface Bookshelf {
  id: string;
  userId: string;
  name: string;
}
