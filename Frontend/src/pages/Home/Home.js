import React from 'react'
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf";
import Fade from 'react-reveal/Fade';
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm Abhishek Sambharya</h2>
              <h1>
                I am a 
                <Typewriter
                  options={{
                    strings: [
                      "Mern Stack Developer!",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </Fade>
            <Fade bottom>
              <div className="home-buttons">
                <a className="btn btn-hire" href='https://api.whatsapp.com/send?phone=8595786094'>
                Hire Me
                </a>
                <a className="btn btn-cv" href={Resume} download="Abhishek.pdf">
                  My Resume
                </a>
              </div>
            </Fade>
        </div>
      </div>
    </>
  );
}

export default Home
