import "./App.css";
import { Route, Routes } from "react-router-dom";

// import PAGES
import About from "./pages/About";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

// import COMPONENTS
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cocktail/:id" element={<SingleCocktail />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
