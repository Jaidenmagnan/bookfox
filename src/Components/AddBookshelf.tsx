"use client"
interface addBookshelfProps {
    userId: string;
}

function add(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
        userId: form.get("userId") as string,
        name: form.get("name") as string,
    }

    console.log("Submitting bookshelf:", payload);
    fetch("/api/bookshelf/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ response: payload }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Bookshelf created:", data);
            alert("Bookshelf created successfully!");
        })
        .catch(error => {
            console.error("Error creating bookshelf:", error);
            alert("Failed to create bookshelf.");
        });
}

export function AddBookshelf({ userId }: addBookshelfProps) {
    return (
        <div>
            <h2>Bookshelves</h2>
            <p>List of bookshelves will be displayed here.</p>
            {/* You can fetch and display the user's bookshelves here */}
            <p>Currently, this feature is not implemented.</p>

            <form onSubmit={add}>
                <input type="text" name="name" placeholder="Bookshelf Name" required />
                <input type="hidden" name="userId" value={userId} />
                <button type="submit">Create Bookshelf</button>
            </form>



        </div>

    );
}
