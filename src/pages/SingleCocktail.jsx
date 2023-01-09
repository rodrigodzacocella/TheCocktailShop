import React, { useEffect, useState } from "react";
import "./SingleCocktail.css";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2>No cocktail founded</h2>;
  }

  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="single__cocktail-section">
      <Link className="single__cocktail-btn" to="/">
        Back Home
      </Link>
      <h2 className="single__cocktail-title">{name}</h2>
      <div className="single__cocktail">
        <img src={image} alt={name} className="single__cocktail-image" />
        <div className="single__cocktail-info">
          <p className="single__cocktail-data">
            <span>Name</span>
            {name}
          </p>
          <p className="single__cocktail-data">
            <span>Info</span>
            {info}
          </p>
          <p className="single__cocktail-data">
            <span>Category</span>
            {category}
          </p>
          <p className="single__cocktail-data">
            <span>Glass</span>
            {glass}
          </p>
          <p className="single__cocktail-data">
            <span>Instructions</span>
            {instructions}
          </p>
          <p className="single__cocktail-data">
            <span>Ingredients</span>
            {ingredients.map((item, index) => {
              return item ? (
                <p className="ingredient" key={index}>
                  {item}
                </p>
              ) : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
