// Karakter bileşeniniz buraya gelecek
import React, { useEffect, useState } from "react";
import axios from "axios";
//import { response } from "msw";
import Filmler from "./Filmler";
import Accordeon from "./Accordeon";

export default function Karakter() {
  const [characters, setCharacters] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const charPromise = axios.get("https://swapi.dev/api/people/");
    // .then((response) => {
    //   console.log(response.data);
    //   setCharacters(response.data);
    // });

    const filmsPromise = axios.get("https://swapi.dev/api/films/");
    // .then((response) => {
    //     console.log(response.data);
    //     setCharacters(response.data);
    //   });

    Promise.all([charPromise, filmsPromise]).then((values) => {
      console.log(values);
      setCharacters(values[0].data);
      setFilms(values[1].data[0].results);
    });
  }, []);

  return (
    <div>
      {characters.map((char, i) => {
        return (
          <Accordeon key={"c" + i} title={char.name}>
            <p>Gender: {char.gender}</p>
            <p>Height: {char.height}</p>
            <p>Mass: {char.mass}</p>
            <p>Birth Year: {char.birth_year}</p>
            <p>Eye Color: {char.eye_color}</p>
            <p>Hair Color: {char.hair_color}</p>
            <p>Skin Color: {char.skin_color}</p>
            {/* <p>Homeworld: {char.homeworld}</p> */}
            <p>Apperas in:</p>
            <Filmler char={char} i={i} films={films} />
          </Accordeon>
        );
      })}
    </div>
  );
}
