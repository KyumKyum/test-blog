import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
      <div className="flex flex-col justify-between flex-1 h-full">
        <Header/>
        <Footer/>
      </div>
  );
}

