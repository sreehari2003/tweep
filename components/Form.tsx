import { useAuth } from "@app/hooks/useAuth";
import React, { useRef, useState } from "react";

export const Form = () => {
  const [type, setType] = useState<"IN" | "UP">("IN");
  const pass = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const ctx = useAuth();
  const handleSub = (e: React.SyntheticEvent) => {
    e.preventDefault();
    ctx.login(email.current?.value, pass.current?.value, type);
  };
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {type === "IN" ? "sign in " : "sign up "}
              to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSub}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  ref={email}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  ref={pass}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full mb-4 text-white bg-primary-600 hover:bg-primary-700 bg-red-500 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {type === "IN" ? "sign in" : "sign up"}
              </button>

              <span
                className="text-red-400 hover:cursor-pointer text-lg"
                onClick={() => setType((type) => (type === "IN" ? "UP" : "IN"))}
              >
                {type === "IN" ? "sign up" : "sign in"}
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
