import {BookList} from "@/Components/BookList"
import SignIn from "@/Components/SignIn"

export default async function Home() {
  return (
    <div>
      <SignIn/>
      <BookList/>
    </div>
  );
}
