import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

const Feed = () => {
  const [breedList, setBreedList] = useState([]);
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const fetchImageAndBreeds = async () => {
      try {
        // -- Fetching random image and setting to state -- //
        const randomImgResponse = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        console.log("random image", randomImgResponse.data.message);
        setRandomImage(randomImgResponse.data.message);

        const response = await axios.get(
          "https://dog.ceo/api/breed/hound/images"
        );

        console.log(
          "This is list of keys : ",
          Object.keys(response.data.message)
        );
        const arrayWithBreeds = response.data.message;
        setBreedList(arrayWithBreeds);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchImageAndBreeds();
  }, []);

  return (
    <div>
      <h1>Images of Dogs by Breed</h1>
      <img src={randomImage} />
      <ul>
        {breedList.map((breed) => (
          <li key={breed}>
            <img src={breed.message} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
