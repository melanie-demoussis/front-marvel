import axios from "axios";
import { useEffect, useState } from "react";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:4000/characters");
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
    <div>
      {data.results.map((character) => {
        return (
          <article key={character._id}>
            <p>{character.name}</p>
            <img
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              alt=""
            />
          </article>
        );
      })}
    </div>
  );
};

export default Characters;
