"use client"
import { useEffect, useState } from 'react'
import { BookListItem } from '@/Components/BookListItem'
import { getMostPopular } from "@/services/googlebooks"
import { Book, BooksResponse } from "@/types"

export function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    let ignore = false;
    getMostPopular().then((result: BooksResponse) => {
      if (!ignore) {
        setBooks(result.items || [])
      }
    });

    return () => {
      ignore = true;
    }

  }, [])

  return (
    <div>
      {books.map((book: Book) => (
        <BookListItem key={book.id} book={book} />
      ))}
    </div>
  )
}