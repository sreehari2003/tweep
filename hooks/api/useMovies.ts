import { useQuery } from "@tanstack/react-query";
import { IMovie } from "@app/types";
import { ENV } from "@app/config/env";
import { useAuth } from "../useAuth";

const getMovies = async () => {
  const url = "https://api.themoviedb.org/3/movie/popular";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ENV.tmbd}`,
    },
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => json.results)
    .catch((err) => console.error("error:" + err));
};

export const useMovies = () => {
  return useQuery<Array<IMovie>>({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
};
