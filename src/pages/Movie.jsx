// pages/Movie.js
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { movies } from '../data';

function Movie() {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));
  
  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        {movie.genres.map(genre => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </>
  );
}

export default Movie;