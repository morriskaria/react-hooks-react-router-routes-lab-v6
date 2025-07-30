import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import { movies } from "../data";

function Home() {
  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default Home;