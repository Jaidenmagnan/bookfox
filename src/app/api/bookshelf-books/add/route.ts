import { BookshelfBook } from "@/types";
import { db } from "@/db";
import { bookshelfBooks } from "@/db/schema";

export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();
  const { response } = body;

  const book: BookshelfBook = {
    bookshelfId: response.bookshelfId,
    googleBooksId: response.googleBooksId,
  };
  console.log(book);

  await db.insert(bookshelfBooks).values(book);

  return new Response(JSON.stringify(book), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
