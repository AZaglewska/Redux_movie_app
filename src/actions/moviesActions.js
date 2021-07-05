import { actionsTypes } from "./actionsTypes";

export const getMoviesAction = (movies) => ({
  type: actionsTypes.GET_MOVIES,
  payload: movies,
});

export const addMoviesToFavourite = (movieId) => ({
  type: actionsTypes.ADD_MOVIES_TO_FAVOURITE,
  payload: movieId,
});

export const deleteMovieFromFavourite = (movieId) => ({
  type: actionsTypes.DELETE_MOVIE,
  payload: movieId,
});
