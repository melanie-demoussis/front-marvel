// Import des packages
import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

// import des pages
import CharacterCommics from "./CharacterComics";
// import des components

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/characters");
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  console.log("ok");

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <div className="card">
        {data.results.map((character) => {
          return (
            <div>
              <article key={character._id}>
                <div className="like">
                  <i class="fa-regular fa-heart" onClick={() => {}}></i>
                </div>
                <Link to="/characterComics" element={<CharacterCommics />}>
                  <img
                    src={
                      character.thumbnail.path +
                      "." +
                      character.thumbnail.extension
                    }
                    alt=""
                  />{" "}
                  <h2> {character.name}</h2>
                  <p>{character.description}</p>{" "}
                </Link>
              </article>
            </div>
          );
        })}
      </div>
      <div className="paginate">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </main>
  );
};

export default Characters;
