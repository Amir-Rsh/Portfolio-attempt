import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingPage from "./LoadingPage";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3900);

    return () => clearTimeout(timer);
  }, []);
  return isLoading ? (
    <LoadingPage />
  ) : (
    <>
      <nav>
        <Link to="https://portfolio-amir-rashidinia.netlify.app/home">
          <img src="https://i.ibb.co/bR7scSZ/logoooo.png" width="40px" alt="" />
        </Link>
        <Link to="https://www.linkedin.com/in/amir-rashidinia">
          <img
            src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
            width="40px"
            style={{ margin: "0 50px 0 50px" }}
            alt=""
          />
        </Link>
        <Link to="https://github.com/Amir-Rsh">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
            width="40px"
            alt=""
          />
        </Link>
      </nav>
      <div className="container1">
        <div className="trapezoid1">
          <p id="aboutMeText">
            {">"}I am a Junior Software Developer with a passion for turning
            code into cool looking websites and apps. I recently graduated from
            a coding bootcamp and can't wait to start my journey in the world of
            tech. I constantly work on new projects to increase my knowledge of
            coding and add to my tech stack.
          </p>
        </div>
        <div id="bisect">
          <p id="about">ABOUT ME</p>
        </div>
        <div className="trapezoid2"></div>
      </div>
      <h1 id="projectsBlink">vvv PROJECTS vvv</h1>
      <div id="container2">
        <div className="trapezoid3"></div>
        <div id="bisect3">
          <p id="projects">PROJECT TIPPER</p>
        </div>
        <div className="trapezoid4">
          <div
            id="tipperDiv"
            style={{
              display: "grid",
              color: "black",
              fontSize: "2rem",
              fontWeight: "bold",
              // marginLeft: "230px",
              width: "100%",
              gridTemplateAreas: "a b c d",
              gridTemplateColumns: "35% 20% 20% 25%",
              opacity: "0",
              animation: "tipperShow 1s forwards 7.6s",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "right",
              }}
            >
              <img
                id="tipperPic"
                src="https://i.ibb.co/SxK1ZRY/Screenshot-from-2024-03-20-18-19-02-1.png"
                alt=""
              />
            </div>
            <p
              style={{
                lineHeight: "63px",
                left: "3px",
                borderColor: "black",
                borderLeftStyle: "solid",
                paddingLeft: "3px",
                textAlign: "left",
              }}
            >
              JavaScript <br />
              MongoDB <br /> Next.js <br /> Stripe <br /> Node.js
            </p>{" "}
            <p
              style={{
                lineHeight: "63px",
                // marginLeft: "50px",
                borderRight: "3px",
                borderColor: "black",
                borderRightStyle: "solid",
                paddingRight: "3px",
                width: "100%",
                textAlign: "right",
              }}
            >
              GitHub <br /> cryptr <br /> Bootstrap <br /> Scss <br /> Vercel
            </p>{" "}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
                height: "400px",
                flexDirection: "column",
              }}
            >
              <Link
                to="https://front-end-eight-eta-57.vercel.app/"
                target="_blank"
              >
                <button
                  id="tipperButtonTop"
                  style={{
                    height: "100px",
                    width: "100px",
                    backgroundColor: "black",
                    borderRadius: "5%",
                    borderBlockColor: "black",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    color: "green",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  Project Page
                </button>
              </Link>
              <Link
                to="https://github.com/Tipper-final-project"
                target="_blank"
              >
                <button
                  id="tipperButtonBottom"
                  style={{
                    height: "100px",
                    width: "100px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    borderRadius: "5%",
                    borderBlockColor: "black",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    color: "green",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  Code on GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container3">
        <div className="trapezoid5">
          <p id="aboutMeText">
            {">"}I am a Junior Software Developer with a passion for turning
            code into cool looking websites and apps. I recently graduated from
            a coding bootcamp and can't wait to start my journey in the world of
            tech. I constantly work on new projects to increase my knowledge of
            coding and add to my tech stack.
          </p>
        </div>
        <div id="bisect">
          <p id="about">ABOUT ME</p>
        </div>
        <div className="trapezoid6"></div>
      </div> */}
    </>
  );
}
