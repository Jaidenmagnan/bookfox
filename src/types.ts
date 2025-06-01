export interface Book {
  id: string;
  volumeInfo: {
    title: string;
  };
}
export interface BooksResponse {
  items: Book[];
}