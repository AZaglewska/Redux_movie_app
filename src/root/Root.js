import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMoviesAction } from '../actions/moviesActions';
import axios from 'axios';
import Router from '../routing/Router';

const Root = ({ getMoviesFn, pageNumber, favouriteMovies }) => {
  useEffect(() => {
    localStorage.setItem('favMovies', JSON.stringify(favouriteMovies));
  }, [favouriteMovies]);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${pageNumber}`
      )
      .then((response) => {
        console.log(response);

        getMoviesFn(response.data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovies();
  }, [pageNumber]);

  return (
    <div>
      <h1>Movie Redux app</h1>
      <Router />
    </div>
  );
};

const mapStateToProps = (state) => ({
  pageNumber: state.pagesReducer.pageNumber,
  favouriteMovies: state.moviesReducer.favouriteMovies,
});

const mapDispatchToProps = (dispatch) => ({
  getMoviesFn: (movies) => dispatch(getMoviesAction(movies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
