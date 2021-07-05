import React from "react";
import { StyledNavLink } from "../navigation/NavbarStyles";
import { routes } from "../../routes";

const Navbar = () => {
  return (
    <div>
      <StyledNavLink to={routes.movies}>All Movies</StyledNavLink>
      <StyledNavLink to={routes.favMovies}>Favourite Movies</StyledNavLink>
    </div>
  );
};

export default Navbar;
