import React from "react";
import MovieList from "../components/MovieList/MovieList";
import { connect } from "react-redux";
import { moviesTypes } from "../types/movieTypes";

const FavMovies = ({ favMovies }) => {
  return (
    <>
      <h1>Fav Movies</h1>
      <MovieList listType={moviesTypes.favMovies} moviesData={favMovies} />
    </>
  );
};

const mapStateToProps = (state) => ({
  favMovies: state.moviesReducer.favouriteMovies,
});

export default connect(mapStateToProps)(FavMovies);
