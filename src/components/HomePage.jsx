import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import petfinderImage from "../assets/Screenshot_20240628-071850-portrait.png";
import dockingImage from "../assets/Screenshot from 2025-07-04 13-11-47.png";
import newsImage from "../assets/Screenshot from 2024-03-21 06-52-36-portrait.png";
import clothingImage from "../assets/Screenshot_20240611-202102-portrait.png";
import tipperImage from "../assets/Screenshot from 2024-03-20 18-19-02.png";
import thesisImg2 from "../assets/Screenshot from 2025-07-06 16-43-18.png";

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
            {">"}I am a drug design researcher and Junior Software Developer
            with a passion for finding suitable small molecules and peptide drug
            analogues to bind to receptors within the body that have the
            potential to improve the human health. I also have fun turning code
            into cool looking websites and apps. I was blessed to have the
            oppurtunity to work within a cross-functional team of brilliant
            developers and worked on real-life projects at a large company. I
            have earned certificates in conventional and also low-code software
            development. I constantly work on new projects to increase my
            knowledge of computer-aided drug design, molecular docking and
            coding to add to my tech stack.
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
              <img id="tipperPic" src={tipperImage} alt="" />
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
        <div id="projectNews">Master's Thesis</div>
        <div className="thesisInfoDiv" id="newsInfo">
          <p id="thesisInfo" style={{ textAlign: "center" }}>
            Design of novel proteolytically stable peptidomimetics of Goserelin
            by computer-aided drug design <br /> <br />
            <Link to="/thesis" target="_blank">
              <button id="newsRightButton">More Information</button>
            </Link>
          </p>

          <img
            id="thesisImg"
            src={dockingImage}
            alt=""
            height="390px"
            style={{ margin: "auto" }}
          />
        </div>
      </div>
      <div className="container3">
        <div id="projectNews">Pharm-D Thesis</div>
        <div className="thesisInfoDiv" id="newsInfo">
          <p id="thesisInfo" style={{ textAlign: "center" }}>
            Toxicity of some ingredients used in various Cosmetic products{" "}
            <br /> <br />
            <Link to="/thesis2" target="_blank">
              <button id="newsRightButton">More Information</button>
            </Link>
          </p>

          <img
            id="thesisImg"
            src={thesisImg2}
            alt=""
            height="390px"
            style={{ margin: "auto" }}
          />
        </div>
      </div>
      <div className="container3">
        <div id="projectNews">PROJECT NC NEWS</div>
        <div id="newsInfo">
          <p style={{ textAlign: "center" }}>
            React.js <br />
            Bootstrap <br />
            PostgreSQL <br /> Netlify <br />
            <Link to="https://my-cool-news-app.netlify.app/" target="_blank">
              <button id="newsLeftButton">Project Page</button>
            </Link>
          </p>
          <img
            id="newsImage"
            src={newsImage}
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
            <Link to="https://github.com/Amir-Rsh/nc_news" target="_blank">
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
            src={clothingImage}
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
            src={petfinderImage}
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
            <Link to="https://petforlove.netlify.app/" target="_blank">
              <button id="newsRightButton">Project Page</button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
