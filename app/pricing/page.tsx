import NavBar from "../ui/nav";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-nord0">
      <NavBar />
      <main className="text-5xl px-10 py-20 max-w-7xl">
        <h1 className="text-center font-semibold">We are currently free for individual users!</h1>
        <div className="flex rounded-lg">
          <div className="flex-1 flex flex-col border border-r-0 border-gray-600 rounded-l-lg mt-30 p-10">
            <p className="text-base mb-3">For teams</p>
            <p className="text-3xl font-bold my-1">Pro</p>
            <p className="text-sm my-1">Elevate your team's communication—pro-grade clarity at scale.</p>
            <div className="flex justify-start items-center gap-3 my-5 invisible">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-base font-bold">per month</span>
            </div>
            <Link href="#" className="border border-gray-600 text-nord4 bg-nord0 hover:bg-nord1 hover:text-nord6 font-medium rounded-lg text-base w-full py-2 self-center text-center">Get started</Link>
          </div>
          <div className="flex-1 flex flex-col border rounded-t-lg mt-20 p-10">
            <div className="flex items-center justify-center h-10 rounded-t-lg bg-nord6 -mx-10 -mt-10">
              <p className="text-nord0 text-lg font-bold">Most Popular</p>
            </div>
            <div className="flex flex-col pt-10">
              <p className="text-base mb-3">For individuals</p>
              <p className="text-3xl font-bold my-1">Free</p>
              <p className="text-sm my-1">Write with confidence—polish your words for free, anytime, anywhere.</p>
              <div className="flex justify-start items-center gap-3 my-5">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-base font-bold">per month</span>
              </div>
              <Link href="#" className="text-nord0 bg-nord6 hover:bg-nord4 font-medium rounded-lg text-base w-full py-2 self-center text-center">Get started</Link>
            </div>
          </div>
          <div className="flex-1 flex flex-col border border-l-0 border-gray-600 rounded-r-lg mt-30 p-10">
            <p className="text-base mb-3">For large organizations</p>
            <p className="text-3xl font-bold my-1">Enterprise</p>
            <p className="text-sm my-1">Precision at enterprise scale—seamless, secure, and tailored to your workflows.</p>
            <div className="flex justify-start items-center gap-3 my-5 invisible">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-base font-bold">per month</span>
            </div>
            <Link href="#" className="border border-gray-600 text-nord4 bg-nord0 hover:bg-nord1 hover:text-nord6 font-medium rounded-lg text-base w-full py-2 self-center text-center">Get started</Link>
          </div>
        </div>
      </main>
    </div>
  );
}