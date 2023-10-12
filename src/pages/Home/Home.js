import React from "react";
import "./Home.css";

// Imagenes
import ImgIphone15 from "./img/iphone15.png";
import ImgAirpods from "./img/airpods.png";

const Home = () => {
  return (
    <>
      <div>
        <img className="img-iphone15" src={ImgIphone15} alt="imgIphone15" />
      </div>

      <div>
        <img className="img-airpods" src={ImgAirpods} alt="imgIphone15" />
      </div>
    </>
  );
};

export default Home;
