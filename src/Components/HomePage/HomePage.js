import React, { useEffect, useState } from "react";
import "./HomePage.css";
import axios from "axios";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Navbar from "../Navbar/Navbar";

const HomePage = () => {
  const [movies, setmovies] = useState("");

  useEffect(() => {
    axios
      .post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((response) => {
        setmovies(response.data["result"]);
      });
  }, [2]);

  console.log("movies", movies);
  return (
    <div className="movies-page-flex-div">
      <div className="movies-page-width-div">
      <Navbar/>
        <div className="movies-page-main-div">

          <div className="movies-details-page-card-main">
        {movies&&movies.map((index)=>(
          <div style={{borderBottom:"1px solid gray", paddingTop:"10px", paddingBottom:"10px"}}>
            <div className="movies-details-page-card" style={{paddingTop:"20p"}}>
              <div className="movies-details-page-card-sub-div-one">
                <div className="movies-details-sub-one-div-two">
                  <IoMdArrowDropup className="vote-arrow-tag" />
                </div>
                <div className="movies-details-sub-one-div-two">
                  <p>{index.voting}</p>
                </div>
                <div className="movies-details-sub-one-div-two">
                  <IoMdArrowDropdown className="vote-arrow-tag" />
                </div>
                <div className="movies-details-sub-one-div-two">
                  <p>Votes</p>
                </div>
              </div>
              <div className="movies-details-page-card-sub-div-two">
                <img
                  // src="https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-1z587327/portrait/1920x77079aee11cc5b74ff5a6553e2044f78bf0.jpg"
                  src={index.poster}
                  className="movies-img-tag"
                />
              </div>

              <div className="movies-details-page-card-sub-div-three">

              <div>
          <h3>{index.title}</h3>
              </div>



              <div className="movies-details-div-three-sub-one">
                  <div className="movies-details-title-div-one">
                    <p>Genre</p>
                  </div>
                  <div className="movies-details-title-div-two">
                    <p>{index.genre}</p>
                  </div>
                </div>

                <div className="movies-details-div-three-sub-one">
                  <div className="movies-details-title-div-one">
                    <p>Director</p>
                  </div>
                  <div className="movies-details-title-div-two">
                    <p>{index.director}</p>
                  </div>
                </div>

                <div className="movies-details-div-three-sub-one">
                  <div className="movies-details-title-div-one">
                    <p>Starring</p>
                  </div>
                  <div className="movies-details-title-div-two">
                    <p>{index.stars}</p>
                  </div>
                </div>

            

                <div className="movies-details-div-three-sub-one">
                  <p style={{color:"#00a5ff"}}>{index.pageViews} views | Voted by {index.totalVoted} people</p>
                </div>
              </div>
            </div>
            <div className="movies-details-page-card-two">
              <button className="watch-trailer-btn">Watch Trailer</button>
            </div>
            </div>
        ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
