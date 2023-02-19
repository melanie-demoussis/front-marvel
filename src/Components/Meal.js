//import package
import React from "react";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

//import pages
import Characters from "../pages/Characters";
import Comics from "../pages/Comics";
import Favoris from "../pages/Favoris";
//import image

import stanLee from "../assets/stanLee.jpg";

const Meal = () => {
  //   const [search, setSearch] = useState("");

  //   useEffect(() => {

  //     setSearch(search);
  //   }, []);
  return (
    <div className="meal">
      <img src={stanLee} alt="" />
      <input
        type="text"
        placeholder="Entre le nom de ton Personnage / Comics "
      />
      <div>
        <Link to="/" element={<Characters />}>
          <p>Personnages</p>
        </Link>
        <Link to="/comics" element={<Comics />}>
          <p>Comics</p>
        </Link>
        <Link to="/favoris" element={<Favoris />}>
          <p>Favoris</p>
        </Link>
      </div>
    </div>
  );
};
export default Meal;
