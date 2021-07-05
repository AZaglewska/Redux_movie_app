import React from "react";
import { connect } from "react-redux";
import {
  addMoviesToFavourite,
  deleteMovieFromFavourite,
} from "../../actions/moviesActions";
import { Link } from "react-router-dom";
import { routes } from "../../routes/index";
import { moviesTypes } from "../../types/movieTypes";

const MovieList = ({
  moviesData,
  addFavouriteMovieProps,
  deleteFavouriteMovieProps,
  listType,
  favouriteMovies,
}) => {
  const number = 20;

  const numbers = [1, 2, 10, 20, 50];

  console.log(numbers.includes(number));

  return (
    <div>
      <ul>
        {moviesData.map((movieElement) => {
          const {
            id,
            title,
            overview,
            original_language,
            release_date,
            poster_path,
            vote_average,
          } = movieElement;
          console.log(favouriteMovies.includes(movieElement), "TUTAJ");

          return (
            <li key={id}>
              <h3>{title}</h3>

              <Link
                to={{
                  pathname: `/movie/${title.replace(/\s/g, "")}`,
                  state: {
                    ...movieElement,
                  },
                }}
              >
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
              </Link>

              {listType === moviesTypes.favMovies ? (
                <button onClick={() => deleteFavouriteMovieProps(id)}>
                  Delete Movie from fav
                </button>
              ) : (
                <button
                  disabled={favouriteMovies.includes(movieElement)}
                  onClick={() => addFavouriteMovieProps(id)}
                >
                  {favouriteMovies.includes(movieElement)
                    ? "movie is alredy in fav movies"
                    : "   add movie to fav"}
                </button>
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
