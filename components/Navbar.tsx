import React from "react";
import Link from "next/link";
import { useAuth } from "@app/hooks/useAuth";

export const Navbar = () => {
  const ctx = useAuth();
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex dark:border-neutral-800 rounded-full p-4 border ">
      <p className="fixed left-0 top-0 flex w-full justify-center  pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 border-none">
        <Link href="/">
          <span className="font-mono font-bold">Jet</span>protocol
        </Link>
      </p>
      <nav className="flex justify-between w-[300px]">
        <span className="hover:cursor-pointer">Products</span>
        <span className="hover:cursor-pointer">dao</span>
        <span className="hover:cursor-pointer"> build</span>
        <span className="hover:cursor-pointer">docs</span>
        <span className="hover:cursor-pointer">
          <Link href="/movies">movies</Link>
        </span>
      </nav>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center gap-5 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <button className="bg-[#64AE9D] px-3 py-2 rounded-full text-black">
          <Link href="/movies">launch app</Link>
        </button>
        {ctx.data && (
          <button
            className="bg-[#64AE9D] px-3 py-2 rounded-full text-black"
            onClick={ctx.logout}
          >
            logout
          </button>
        )}
      </div>
    </div>
  );
};
