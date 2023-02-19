//import package
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

//import pages
import Characters from "../pages/Characters";
import Comics from "../pages/Comics";
import Favoris from "../pages/Favoris";
//import image
import stanLee from "../assets/stanLee.jpg";

//import components

const Meal = () => {
  const [search, setSearch] = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setSearch(search);
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="hero">
      <img src={stanLee} alt="" />
      <div>
        <input
          className="search"
          value={search}
          type="text"
          placeholder="Entre le nom de ton Personnage / Comics "
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      <div className="meal">
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
