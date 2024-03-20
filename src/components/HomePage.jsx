export default function HomePage() {
  return (
    <>
      <nav>
        <img
          src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png"
          width="40px"
          alt=""
        />
        <img
          src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
          width="40px"
          style={{ margin: "0 30px 0 30px" }}
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
          width="40px"
          alt=""
        />
      </nav>
      <div id="2ndProject" className="container1">
        <div className="trapezoid1">
          <p id="aboutMeText">
            {">"}I am a Junior Software Developer with a passion for turning
            code into cool looking websites and apps. I recently graduated from
            a coding bootcamp and i can't wait to start my journey in the world
            of tech. I constantly work on new projects to increase my knowledge
            of coding and add to my tech stack.
          </p>
          {/* <p id="bisect2"></p> */}
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
          <p id="bisect4"></p>
        </div>
      </div>
      <div className="container1">
        <div className="trapezoid1">
          <p id="bisect2"></p>
        </div>
        <div id="bisect">
          <p id="about">ABOUT ME</p>
        </div>
        <div className="trapezoid2"></div>
      </div>
    </>
  );
}
