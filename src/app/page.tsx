import { BookList } from "@/Components/BookList"
import SignOut from "@/Components/SignOut";

export default async function Home() {
  return (
    <div>
      <SignOut />
      <BookList />
    </div>
  );
}
