import { actionsTypes } from "../actions/actionsTypes";
import { getFavMoviesFromLocalStorage } from "../helpers/localStorageGetters";

const initialState = {
  movies: [],
  favouriteMovies: getFavMoviesFromLocalStorage(),
};

const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.GET_MOVIES:
      return {
        ...state,
        movies: [...payload],
      };

    case actionsTypes.ADD_MOVIES_TO_FAVOURITE:
      const findFavouriteMovie = state.movies.find(
        (movie) => movie.id === payload
      );
      return {
        ...state,
        favouriteMovies: [
          ...new Set([...state.favouriteMovies, findFavouriteMovie]),
        ],
      };

    case actionsTypes.DELETE_MOVIE:
      const filteredFavMovies = state.favouriteMovies.filter(
        (favouriteMovieElement) => favouriteMovieElement.id !== payload
      );

      return {
        ...state,
        favouriteMovies: [...filteredFavMovies],
      };

    default:
      return state;
  }
};

export default moviesReducer;
