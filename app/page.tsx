import NavBar from "./ui/nav";
import Link from 'next/link';
import Footer from "./ui/footer";

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-nord0">
      <NavBar />

      <main className="flex flex-grow flex-col items-center mx-8 my-20 sm:m-20 max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:py-10 gap-8 items-center justify-center">
          <div className="lg:basis-1/2 flex flex-col items-center lg:items-start gap-2 sm:gap-0">
            <h1 className="text-left sm:text-center lg:text-left font-semibold text-3xl sm:text-4xl xl:text-5xl xl:leading-14 pb-5 sm:pb-10 text-nord6">Transform Your Writing with Intelligent AI Assistance</h1>
            <p className="text-left sm:text-center lg:text-left text-lg sm:text-xl pb-5 sm:pb-10 text-nord6">Scintillating prose, poised and precise – polished to perfection in a keystroke</p>
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-6">
              <Link href="#" className="text-nord0 bg-nord6 hover:bg-nord4 font-medium rounded-lg text-base w-full sm:w-auto px-6 lg:px-10 py-4 sm:py-2 self-center text-center">Sign up</Link>
              <Link href="#" className="border border-gray-600 text-nord4 bg-nord0 hover:bg-nord1 hover:text-nord6 font-medium rounded-lg text-base w-full sm:w-auto px-6 lg:px-10 py-4 sm:py-2 self-center text-center">Log in</Link>
            </div>
          </div>
          <div className="max-w-150 lg:basis-1/2 hidden sm:flex items-center justify-center">
            <img
              src="/hero_desktop.png"
              className="object-contain"
              alt="Screenshots of the suggestions given by En-Scintillating"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
