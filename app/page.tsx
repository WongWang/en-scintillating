import Image from "next/image";
import NavBar from "./ui/nav";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-nord0">
      <NavBar />
      <main className="flex flex-col items-center m-8 mb-20 sm:m-20 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h1 className="text-left font-semibold text-3xl sm:text-4xl xl:text-5xl xl:leading-14 pt-10 pb-5 sm:pb-10 text-nord6">Transform Your Writing with Intelligent AI Assistance</h1>
            <p className="text-lg sm:text-xl pb-5 sm:pb-8 text-nord6">Scintillating prose, poised and precise – polished to perfection in a keystroke</p>
            <div className="flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-6 self-center">
              <Link href="#" className="text-nord0 bg-nord6 hover:bg-nord4 font-medium rounded-lg text-base w-full sm:w-auto px-6 lg:px-10 py-4 sm:py-2 self-center text-center">Sign up</Link>
              <Link href="#" className="border border-gray-600 text-nord4 bg-nord0 hover:bg-nord1 hover:text-nord6 font-medium rounded-lg text-base w-full sm:w-auto px-6 lg:px-10 py-4 sm:py-2 self-center text-center">Log in</Link>
            </div>
          </div>
        </div>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
