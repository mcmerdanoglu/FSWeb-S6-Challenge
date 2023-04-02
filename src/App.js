import React, { useEffect, useState } from "react";
//import axios from "axios";
import Karakter from "./components/Karakter";
import SearchBar from "./components/SearchBar";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // axios
  //   .get("https://swapi.dev/api/people/", {
  //     params: {},
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed
  //   });
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <SearchBar />
      <h1 className="Header">SWAPI Karakterler</h1>
      <Karakter />
    </div>
  );
};

export default App;
