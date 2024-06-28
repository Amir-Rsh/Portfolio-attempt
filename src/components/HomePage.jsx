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
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            marginRight: "100px",
          }}
          to="mailto:amirrashidinia93@gmail.com"
          target="_blank"
        >
          <i
            style={{
              transform: "scale(2.2)",
              marginTop: "10px",
              cursor: "pointer",
            }}
            className="fa-solid fa-envelope"
          ></i>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="https://www.linkedin.com/in/amir-rashidinia"
          target="_blank"
        >
          <i
            style={{
              transform: "scale(2.2)",
              marginTop: "10px",
              cursor: "pointer",
            }}
            className="fa-brands fa-linkedin"
          ></i>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="https://github.com/Amir-Rsh"
          target="_blank"
        >
          <i
            style={{
              transform: "scale(2.2)",
              marginTop: "10px",
              marginLeft: "100px",
              cursor: "pointer",
            }}
            className="fa-brands fa-github"
          ></i>
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
              width: "100%",
              gridTemplateAreas: "a b c d",
              gridTemplateColumns: "35% 20% 20% 25%",
              opacity: "0",
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
      <div className="container3">
        <div id="projectNews">PROJECT NC NEWS</div>
        <div id="newsInfo">
          <p style={{ textAlign: "center" }}>
            React.js <br />
            Bootstrap <br />
            PostgreSQL <br /> Netlify <br />
            <Link to="https://nc-news-amir.netlify.app/" target="_blank">
              <button id="newsLeftButton">Project Page</button>
            </Link>
          </p>
          <img
            id="newsImage"
            src="https://i.ibb.co/mhvT3jV/Screenshot-from-2024-03-21-06-52-36-portrait.png"
            alt=""
            height="390px"
            style={{ margin: "auto" }}
          />
          <p style={{ textAlign: "center" }}>
            Node.js <br />
            Express <br />
            Render <br />
            HTML & CSS
            <br />
            <Link
              to="https://github.com/Amir-Rsh/fe-animal-doctor"
              target="_blank"
            >
              <button id="newsRightButton">Code on GitHub</button>
            </Link>
          </p>
        </div>
      </div>
      <div className="container4">
        <div id="projectNews">PROJECT ANIMAL RESCUES</div>
        <div id="newsInfo">
          <p style={{ textAlign: "center" }}>
            React Native <br />
            Mapview <br />
            MongoDB <br /> Render <br />
            <Link
              to="https://github.com/Amir-Rsh/be-animal-rescue"
              target="_blank"
            >
              <button id="newsLeftButton">Backend Code</button>
            </Link>
          </p>
          <iframe
            style={{
              borderRadius: 30,
              borderStyle: "solid",
              borderColor: "black",
              borderWidth: 5,
              marginTop: 10,
              justifySelf: "center",
            }}
            width="500"
            height="370"
            src="https://www.youtube.com/embed/-urPIJykL7k?si=fNiC-vlu07CpJDuc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p style={{ textAlign: "center" }}>
            Supertest <br />
            Express <br />
            Node.js <br />
            Expo
            <br />
            <Link
              to="https://github.com/Amir-Rsh/fe-animal-doctor"
              target="_blank"
            >
              <button id="newsRightButton">fornt-end code</button>
            </Link>
          </p>
        </div>
        <div id="projectNews">PROJECT CLOTHING STORE</div>
        <div id="newsInfo">
          <p style={{ textAlign: "center" }}>
            React <br />
            TypeScript <br />
            MongoDB <br /> Render <br />
            <Link
              to="https://github.com/Amir-Rsh/clothing-store"
              target="_blank"
            >
              <button id="newsLeftButton">GitHub Code</button>
            </Link>
          </p>
          <img
            id="newsImage"
            src="https://i.ibb.co/wKbkXP7/Screenshot-20240611-202102-1-portrait.png"
            alt=""
            height="390px"
            style={{ margin: "auto" }}
          />
          <p style={{ textAlign: "center" }}>
            Cookie js <br />
            Stripe
            <br />
            Express
            <br />
            Supertest
            <br />
            <Link to="https://peran-clothing.netlify.app/" target="_blank">
              <button id="newsRightButton">Project Page</button>
            </Link>
          </p>
        </div>
        <div id="projectNews">CLIENT PORTFOLIO</div>
        <div id="newsInfo">
          <p style={{ textAlign: "center" }}>
            Netlify <br />
            TypeScript <br />
            React <br /> GitHub <br />
            <Link
              to="https://github.com/Amir-Rsh/yas-portfolio"
              target="_blank"
            >
              <button id="newsLeftButton">GitHub Code</button>
            </Link>
          </p>
          <img
            id="newsImage"
            src="https://i.ibb.co/9pgmrTS/Screenshot-20240626-155025-portrait.png"
            alt=""
            height="390px"
            style={{ margin: "auto" }}
          />
          <p style={{ textAlign: "center" }}>
            Node js <br />
            HTML
            <br />
            Vanilla CSS
            <br />
            Namecheap
            <br />
            <Link to="https://yas-yazdanian.net/" target="_blank">
              <button id="newsRightButton">Project Page</button>
            </Link>
          </p>
        </div>
        <div id="projectNews">3D PETFINDER</div>
        <div id="newsInfo">
          <p style={{ textAlign: "center" }}>
            Three JS <br />
            Vanilla JS <br />
            Figma <br /> GitHub <br />
            <Link to="https://github.com/Amir-Rsh/3d-petfinder" target="_blank">
              <button id="newsLeftButton">GitHub Code</button>
            </Link>
          </p>
          <img
            id="newsImage"
            src="https://i.ibb.co/TP80tx5/Screenshot-20240628-071850-portrait.png"
            alt=""
            height="390px"
            style={{ margin: "auto" }}
          />
          <p style={{ textAlign: "center" }}>
            AWS
            <br />
            HTML
            <br />
            Vanilla CSS
            <br />
            Node js
            <br />
            <Link
              to="https://master.d3m0it9z81slrf.amplifyapp.com"
              target="_blank"
            >
              <button id="newsRightButton">Project Page</button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
