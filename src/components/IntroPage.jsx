import { Link } from "react-router-dom";
import myImage from "../assets/149586453.png";

export default function IntroPage() {
  return (
    <>
      <div style={{ marginTop: "90px" }} className="container">
        <p id="line1">
          <span id="inputSign1">{">"}</span>HELLO WORLD!
        </p>
      </div>
      <br />
      <div className="container">
        <p id="line2">
          <span id="inputSign2">{">"}</span>I AM AMIR RASHIDINIA
        </p>
      </div>
      <br />
      <div className="container">
        <p id="line3">
          <span id="inputSign3">{">"}</span>WELCOME TO MY PORTFOLIO
        </p>
      </div>
      <br />
      <p id="slider">
        <Link to="home">
          <button id="enter" style={{ color: "black", textDecoration: "none" }}>
            ENTER WEBSITE
          </button>
        </Link>
      </p>

      <p id="navDiv" style={{ marginBottom: "0%" }}>
        <Link
          className="logos"
          style={{ textDecoration: "none", color: "green" }}
          to="https://www.linkedin.com/in/amir-rashidinia"
          target="_blank"
        >
          <i
            style={{
              transform: "scale(5)",
              marginRight: "10px",
              cursor: "pointer",
            }}
            className="fa-brands fa-linkedin"
          ></i>
        </Link>

        <img id="profilePic" src={myImage} alt="" />
        <Link
          className="logos"
          style={{ textDecoration: "none", color: "green" }}
          to="https://github.com/Amir-Rsh"
          target="_blank"
        >
          <i
            style={{
              transform: "scale(5)",
              marginLeft: "10px",
              cursor: "pointer",
            }}
            className="fa-brands fa-github"
          ></i>
        </Link>
      </p>
    </>
  );
}
