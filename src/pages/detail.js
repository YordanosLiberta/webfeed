import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BreedDetails from "./search";

/*
Homepage:
  1. I want to display a list of dog breeds: DONE
    - useEffect
  2. I want to display a random image at the top like a banner
  3. Sorting/filtering
    - Dropdown => <select> <options>
    -
    -
Im going to need:
 - 
*/

const Detail = () => {
  const [breedList, setBreedList] = useState([]);
  const [randomImage, setRandomImage] = useState(null);
  const [sortBy, setSortBy] = useState(0);
  const [filterBy, setFilterBy] = useState(0);

  useEffect(() => {
    const fetchImageAndBreeds = async () => {
      try {
        //  ---- Fetching breed list and setting to state ----  //
        const response = await axios.get("https://dog.ceo/api/breeds/list/all");
        const arrayWithBreeds = Object.keys(response.data.message);

        // -- Fetching random image and setting to state -- //
        const randomImgResponse = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        console.log("random image", randomImgResponse.data.message);

        setBreedList(arrayWithBreeds);
        setRandomImage(randomImgResponse.data.message);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchImageAndBreeds();
  }, []);

  /// Prepping data to be rendered
  const sortedData =
    sortBy === 0
      ? breedList.sort((a, b) => a.localeCompare(b))
      : breedList.sort((a, b) => b.localeCompare(a));
  ///

  return (
    <div>
      <div>
        <label>Sort by: </label>
        <select
          onChange={(event) => setSortBy(parseInt(event.target.value))}
          value={sortBy}
        >
          <option value={0}>A - Z</option>
          <option value={1}>Z - A</option>
        </select>
      </div>
      <div>
        <ul>
          {sortedData.map((breed) => (
            <li key={breed}>
              <Link to={`/breeds/${breed}`}>{breed}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Detail;
