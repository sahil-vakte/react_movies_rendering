import React, { useEffect, useState } from "react";
import "./HomePage.css";
import axios from "axios";

const HomePage = () => {
  const createPost =() => {
    axios
      .post("https://hoblist.com/api/movieList", {
        category: "Movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((response) => {
        console.log("response",response.data);
      });
  }


  return <div>HomePage
  <button onClick={createPost}>Submit</button>
  </div>;
};

export default HomePage;
