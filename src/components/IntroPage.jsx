import { Link } from "react-router-dom";

export default function IntroPage() {
  // {">"}
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
        <Link to="https://www.linkedin.com/in/amir-rashidinia" target="_blank">
          {" "}
          <img
            className="logos"
            src="https://i.ibb.co/XZwQdtV/Linked-In-logo-initials.png"
            width="150px"
            alt=""
          />
        </Link>

        <img
          id="profilePic"
          src="https://i.ibb.co/nn6bFZ6/149586453.png"
          alt=""
        />
        <Link to="https://github.com/Amir-Rsh" target="_blank">
          {" "}
          <img
            className="logos"
            src="https://i.ibb.co/zhzDFnB/git-2.png"
            width="150px"
            height="150px"
            alt=""
          />
        </Link>
      </p>
    </>
  );
}
