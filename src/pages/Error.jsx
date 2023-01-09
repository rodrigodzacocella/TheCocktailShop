import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <section className="error__section">
      <h1 className="error__title">oops! It's a dead end...</h1>
      <Link to="/">Back home</Link>
    </section>
  );
};

export default Error;
