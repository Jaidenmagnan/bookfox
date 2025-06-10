import { Book, BookshelfBook } from "@/types"

interface BookListItemProps {
    book: Book
}

function addBook(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const bookshelfBook: BookshelfBook = {
        bookshelfId: formData.get("bookshelfId") as string,
        googleBooksId: formData.get("googleBooksId") as string,
    };
    console.log("Bookshelf Book:", bookshelfBook);
    // Here you would typically send the bookshelfBook to your API or handle it as needed
    console.log("Submitting bookshelf book:", bookshelfBook);
    fetch("/api/bookshelf-books/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ response: bookshelfBook }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            form.reset();
            alert("Book added to bookshelf!");
            console.log(data)
            form.clear();
        })
        .catch(error => {
            console.error("Error adding book to bookshelf:", error);
            alert("Failed to add book to bookshelf.");
        });
}

export function BookListItem({ book }: BookListItemProps) {
    return (
        <div>
            <p>{book.volumeInfo.title}</p>
            <form onSubmit={addBook}>
                <input type="text" name="bookshelfId" /> {/* this would be replaced with a dropdown */}
                <input type="hidden" name="googleBooksId" value={book.id} readOnly />
                <button type="submit">Add to Bookshelf</button>
            </form>
        </div>
    );
}