export const getFavMoviesFromLocalStorage = () => {
  let favMoviesFromLocalStorage;

  if (localStorage.getItem("favMovies")) {
    favMoviesFromLocalStorage = JSON.parse(localStorage.getItem("favMovies"));
  } else {
    favMoviesFromLocalStorage = [];
  }

  return favMoviesFromLocalStorage;
};
