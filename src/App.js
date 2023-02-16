//import fonctionnalité
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Pages
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import CharacterCommics from "./pages/CharacterComics";
//import Components
import Header from "./Components/Header";

// import pictures

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/charactercomics" element={<CharacterCommics />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
