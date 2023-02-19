//import fonctionnalité
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Pages
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import CharacterCommics from "./pages/CharacterComics";
import Favoris from "./pages/Favoris";
//import Components
import Header from "./Components/Header";
import Meal from "./Components/Meal";

// import pictures

function App() {
  return (
    <Router>
      <Header />
      <Meal />

      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characterComics" element={<CharacterCommics />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/favoris" element={<Favoris />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
