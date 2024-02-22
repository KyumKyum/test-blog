import Footer from "@/components/Footer";
import Header from "@/components/Header";
import fetchVerse from "@/logic/fetchVerse";

export default async function Home() {
//Array, Random

  const book: string[] = ["Genesis+1:3", "John+11:36"];

  //* Random function
  //* TS <- Assignment!
  //* Random 0 ~ book.length - 1

  const verse = await fetchVerse(book[0]);

  return (
      <div className="flex flex-col justify-between flex-1 h-full">
        <Header/>
        <Footer verse={verse}/>
      </div>
  );
}

