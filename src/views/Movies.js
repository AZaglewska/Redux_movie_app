import React from "react";
import { connect } from "react-redux";
import MovieList from "../components/MovieList/MovieList";
import Pagination from "../components/Pagination/Pagination";
import { moviesTypes } from "../types/movieTypes";

const Movies = ({ movies }) => {
  return (
    <div>
      <MovieList listType={moviesTypes.movies} moviesData={movies} />
      <Pagination />
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies,
});

export default connect(mapStateToProps)(Movies);
