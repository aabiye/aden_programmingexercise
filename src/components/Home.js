import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.jpg";
import "../style/style.css";


function Home() {
  return (
    <div className="bkimage" style={{ backgroundImage: `url(${home})` }}>
      <div className="headerContainer">
        <h1 className="hometitle">
          OFFICE OF THE CLERK
          <br />
          Legislature's record keeper
        </h1>
        <Link to="/member">
          <button> MEMBERS </button>
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
