import React from "react";
import about from "../assets/aboutus.jpg";
import "../style/style.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${about})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT THE CLERK</h1>
        <p>
          The Clerk of the United States House of Representatives is an officer
          of the United States House of Representatives, whose primary duty is
          to act as the chief record-keeper for the House. Along with the other
          House officers, the Clerk is elected every two years when the House
          organizes for a new Congress.
        </p>
      </div>
    </div>
  );
}

export default About;
