import { getMostPopular } from "../services/googlebooks"

export default async function Home() {
  const data = await getMostPopular();
  console.log(data)
  return (
    <div>this is the home page</div>

  );
}
