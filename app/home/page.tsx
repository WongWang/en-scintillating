import TextEditor from "@/app/ui/textEditor";
import Link from 'next/link';
import Suggestions from "../ui/suggessions";

export default function Page() {
  return (
    <div className="flex flex-row items-start min-h-screen gap-8 bg-nord0">
      <div className="basis-2/3 pl-8 sm:pl-20">
        <div className="sticky flex justify-start gap-5 top-0 right-0 left-0 h-20 py-5 bg-nord0 z-20">
          <Link href="/" className="flex items-center space-x-1">
            <img src="/logo.png" className="h-7 sm:h-9" alt="En-Scintillating Logo"/>
          </Link>
          <input type="text" placeholder="Untitled document" className="focus:outline-none hover:bg-nord1 focus:bg-nord1 p-3 text-2xl font-semibold rounded-lg" />
        </div>
        <div className="relative px-18 pt-8 min-h-[calc(100vh-5rem)] flex flex-row justify-center">
          <TextEditor />
        </div>
      </div>
      <div className="basis-1/3">
        <Suggestions />
      </div>    
    </div>
  );
}