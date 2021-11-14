import React from 'react';
import { connect } from 'react-redux';
import Image from '../../atoms/Image';
import {
  addMoviesToFavourite,
  deleteMovieFromFavourite,
} from '../../actions/moviesActions';
import { Link } from 'react-router-dom';
import { moviesTypes } from '../../types/movieTypes';
import axios from 'axios';

const MovieList = ({
  moviesData,
  addFavouriteMovieProps,
  deleteFavouriteMovieProps,
  listType,
  favouriteMovies,
}) => {
  const checkIsInFav = (movieId) => {
    let isInFav = false;

    favouriteMovies.forEach((movie) => {
      if (movie.id === movieId) {
        isInFav = true;
      }
    });
    console.log(isInFav, 'BOOL');
    return isInFav;
  };

  const rateMovie = (movieId) => {
    axios
      .post(
        `https://api.themoviedb.org/3/movie/550/rating?api_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjYwMTAyNjMsIm5iZiI6MTYyNjAwOTM2MywiYXVkIjoiN2I3NTQ2NGI4ZTQ3NmY4MmNhYzI3Y2ZiMzg5YzhkM2YiLCJzY29wZXMiOlsicGVuZGluZ19yZXF1ZXN0X3Rva2VuIl0sInJlZGlyZWN0X3RvIjoiaHR0cDovL3d3dy50aGVtb3ZpZWRiLm9yZy8iLCJ2ZXJzaW9uIjoxLCJqdGkiOjMyNDk4Njd9.pSscajJu1Ct8j-E9MKdABHpoEapJ--QNl9AAWCC7hl8`,
        {
          value: 0.5,
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  };

  return (
    <div>
      <ul>
        {moviesData.map((movieElement) => {
          const { id, title, poster_path } = movieElement;

          return (
            <li key={id}>
              <h3>{title}</h3>

              <Link
                to={{
                  pathname: `/movie/${title.replace(/\s/g, '')}`,
                  state: {
                    ...movieElement,
                  },
                }}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  styleType="movie"
                  alt={title}
                />
              </Link>

              {listType === moviesTypes.favMovies ? (
                <button onClick={() => deleteFavouriteMovieProps(id)}>
                  Delete Movie from fav
                </button>
              ) : (
                <>
                  <button
                    disabled={checkIsInFav(id)}
                    onClick={() => addFavouriteMovieProps(id)}
                  >
                    {favouriteMovies.includes(movieElement)
                      ? 'movie is alredy in fav movies'
                      : '   add movie to fav'}
                  </button>
                  <button onClick={rateMovie}>rate movie</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favouriteMovies: state.moviesReducer.favouriteMovies,
});

const mapDispatchToProps = (dispatch) => ({
  addFavouriteMovieProps: (movieId) => dispatch(addMoviesToFavourite(movieId)),
  deleteFavouriteMovieProps: (movieId) =>
    dispatch(deleteMovieFromFavourite(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
