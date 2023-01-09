import React from "react";
import "./Cocktail.css";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, glass }) => {
  return (
    <article className="cocktail">
      <div className="cocktail__card">
        <div className="image__container">
          <img className="cocktail__image" src={image} alt={name} />
        </div>
        <div className="cocktail__details">
          <h2 className="cocktail__name">{name}</h2>
          <p className="cocktail__glass">{glass}</p>
          <Link to={`/cocktail/${id}`} className="cocktail__details-link">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Cocktail;
