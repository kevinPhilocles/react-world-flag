import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import { ReactComponent as ErrPage } from "../assets/images/page_not_found.svg";

function ErrorPage() {
  return (
    <div>
      <Logo />
      <div className="error-page">
        <div className="bloc-text">
          <h2>La page est introuvable.</h2>
          <NavLink to="/">Retour à la page d'accueil</NavLink>
        </div>
        <div className="bloc-image">
          <ErrPage />
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
