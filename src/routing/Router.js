import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FullMovie from "../components/FullMovie/FullMovie";
import { routes } from "../routes";
import MainTemplate from "../templates/MainTemplate";
import FavMovies from "../views/FavMovies";
import Movies from "../views/Movies";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <MainTemplate>
          <Route exact path={routes.movies} component={Movies} />
          <Route path={routes.fullMovie} component={FullMovie} />
          <Route path={routes.favMovies} component={FavMovies} />
        </MainTemplate>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
