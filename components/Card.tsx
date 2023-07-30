import React from "react";
import Image from "next/image";

interface Idata {
  img: string;
  title: string;
}

export const Card = ({ img, title }: Idata) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#" className="h-full w-full">
        <Image
          className="rounded-t-lg"
          src={"https://image.tmdb.org/t/p/original" + img}
          alt="product image"
          width="700"
          height="700"
        />
      </a>
      <div className="px-5 pb-5 mt-1">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
            {title}
          </h5>
        </a>
      </div>
    </div>
  );
};
