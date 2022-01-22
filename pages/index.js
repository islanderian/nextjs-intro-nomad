import { useEffect, useState } from "react";
import Seo from "../componets/Seo";

const API_KEY = "c25df470e0a91fa6473fce060443740c";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      console.log(results);
      setMovies(results);
    })();

    /*
    // 위 코드와 동일!!
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const json = await response.json();
      const results = json.results;
      console.log(results);
      setMovies(results);
    })();
    */
  }, []);
  return (
    <div>
      <Seo title="Home"></Seo>
      {!movies && <h4>Loading...</h4>} {/* movies 배열이 비어 있을 때 */}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
