export const getFavMoviesFromLocalStorage2 = () => {
  let favMoviesFromLocalStorage;

  localStorage.getItem('favMovies')
    ? (favMoviesFromLocalStorage = JSON.parse(
        localStorage.getItem('favMovies')
      ))
    : (favMoviesFromLocalStorage = []);

  return favMoviesFromLocalStorage;
};

export const getFavMoviesFromLocalStorage = () =>
  localStorage.getItem('favMovies')
    ? JSON.parse(localStorage.getItem('favMovies'))
    : [];
