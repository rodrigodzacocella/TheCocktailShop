import React, { useRef } from "react";
import "./SearchForm.css";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search__section">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="form__container">
          <label className="form__label" htmlFor="name">
            Search your favourite cocktail
          </label>
          <input
            className="form__input"
            type="text"
            id="name"
            placeholder="Ace"
            autocomplete="off"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
