import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-mono mx-20 my-10">
      <Header />
      <main className="">
        <Hero />
        
      </main>
      <Footer />
    </div>
  );
}
