import { Inter, Poppins, Playfair_Display } from "next/font/google";
import { Navbar } from "@app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  weight: "600",
  subsets: ["latin"],
  style: "italic",
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-14 ${inter.className}`}
    >
      <Navbar />
      {/* <span className="relative flex flex-col place-items-center before:absolute before:h-[00px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"></span> */}
      <div className="relative flex flex-col place-items-center ">
        <h1 className={`font-[600]  ${poppins.className} text-[48px]`}>
          the next generation of
        </h1>
        <span className={`text-[48px] ${playfair.className}`}>
          defi governance
        </span>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Docs{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find in-depth information about Next.js features and API.
        </p>
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Learn{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Learn about Next.js in an interactive course with&nbsp;quizzes!
        </p>
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Templates{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Discover and deploy boilerplate example Next.js&nbsp;projects.
        </p>
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Deploy{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </div>
    </main>
  );
}
