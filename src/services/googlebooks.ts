import 'dotenv/config';

export async function getMostPopular() {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=bestseller&orderBy=relevance&maxResults=40&printType=books&langRestrict=en");

    if (!response.ok) {
        console.log("could not make call for most popular books")
    }

    const data = response.json();
    return data;

}