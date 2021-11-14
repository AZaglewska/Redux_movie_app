import React from 'react';

const FullMovie = (props) => {
  const {
    title,
    overview,
    original_language,
    release_date,
    poster_path,
    vote_average,
  } = props.location.state;

  return (
    <div>
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <p>{overview}</p>
      <h3>{original_language}</h3>
      <h3> {release_date}</h3>
      <h3>{vote_average}</h3>
    </div>
  );
};

export default FullMovie;
