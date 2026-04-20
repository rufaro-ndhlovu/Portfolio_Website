import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-background ">
        <h1 className="max-w-md text-3xl font-bold leading-10 tracking-tight text-orange font-display">
          RUFARO NDHLOVU
        </h1>
      </main>
    </div>
  );
}
