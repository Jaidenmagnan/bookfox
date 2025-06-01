import {Book } from "@/types"

interface BookListItemProps {
    book: Book
}

export function BookListItem( {book}: BookListItemProps) {
    return (<p>{book.volumeInfo.title}</p>);
}