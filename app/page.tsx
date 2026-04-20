import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
