import { Inter, Poppins, Playfair_Display } from "next/font/google";
import { Navbar } from "@app/components/Navbar";
import Image from "next/image";

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

const subPoppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-14 ${inter.className}`}
    >
      <Navbar />
      <span className="flex flex-col place-items-center before:absolute before:h-[00px] before:w-[480px]  before:rounded-sm  before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-[300px] after:bg-gradient-conic after:from-[#64AE9D] after:via-[#64AE9D] after:blur-md after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#64AE9D] after:dark:from-[#64AE9D] after:dark:via-[#64AE9D]/40 before:lg:h-[160px]"></span>
      <div className="relative flex flex-col place-items-center ">
        <span className="text-[#64AE9D] ">Jet Protocol</span>
        <h1 className={`font-[600]  ${poppins.className} text-[48px]`}>
          the next generation of
        </h1>
        <span className={`text-[48px] ${playfair.className}`}>
          defi governance
        </span>
        <div
          className={`text-[20px] ${subPoppins.className} text-[#ffffff99] text-center mt-5`}
        >
          experience open source,transparent and efficent borrowing <br />
          <span className="text-center">and lending in solana</span>
        </div>
        <div className="flex gap-3 mt-4">
          <button className="bg-[#64AE9D] px-7 py-2 rounded-full text-black">
            read docs
          </button>
          <button className="bg-black px-7 py-2 rounded-full text-white border-[1px] border-white">
            how it works
          </button>
        </div>
      </div>
      <div className="mb-[120px] hover:cursor-pointer">
        <Image src="/Frame 10.png" alt="iage" height="700" width="2000" />
      </div>
    </main>
  );
}
