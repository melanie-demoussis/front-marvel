import axios from "axios";
import { useState, useEffect } from "react";

const CharacterCommics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/comics/:characterId"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ....</p>
  ) : (
    <main>
      <div>
        {data.results.map((characterId) => {
          return (
            <div key={characterId._id}>
              <div>{characterId.comics}</div>
            </div>
          );
        })}
      </div>
      <div>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </main>
  );
};
export default CharacterCommics;
