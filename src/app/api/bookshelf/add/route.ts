import { Bookshelf } from "@/types";
import { db } from "@/db";
import { bookshelves } from "@/db/schema";
import { randomUUID } from "crypto";

export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();
  const { response } = body;

  const bookshelf: Bookshelf = {
    id: randomUUID(),
    userId: response.userId,
    name: response.name,
  };
  console.log(bookshelf);

  await db.insert(bookshelves).values(bookshelf);

  return new Response(JSON.stringify(bookshelf), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
