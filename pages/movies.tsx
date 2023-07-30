import React from "react";
import { useMovies } from "@app/hooks/api/useMovies";
import { Navbar, Card, Loader } from "@app/components";
import { AuthGuard } from "@app/context/AuthGuard";

const Movies = () => {
  const { data, isLoading } = useMovies();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="h-full flex-col flex justify-center p-12 items-center w-full">
      <Navbar />

      <AuthGuard>
        <div className="flex gap-7 mt-10 flex-wrap px-8">
          {data?.map((el) => (
            <Card img={el?.backdrop_path} key={el.title} title={el.title} />
          ))}
        </div>
      </AuthGuard>
    </div>
  );
};

export default Movies;
