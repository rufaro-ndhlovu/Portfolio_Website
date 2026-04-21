import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
