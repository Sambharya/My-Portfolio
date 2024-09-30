import React from 'react'
import "./About.css"
import Jump from 'react-reveal/Jump';
const About = () => {
  return (
    <>
      <Jump>
        <div className='about' id='about'>
            <div className='row'>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                    <img src='Images/portfolio-pic2.jpg' alt='profile-pic'></img>
                </div>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                    <h1>About Me</h1>
                    <p>
                    I'm Abhishek Sambharya, a proud Noida native with a passion for technology and innovation. Currently, I'm immersed in pursuing my Bachelor of Technology (BTech.) degree in Mathematics and Computing at Delhi Technological University (DTU), Delhi. Throughout my academic journey, I've found myself drawn to the fascinating realms of data structures, algorithms, and web development, constantly seeking to unravel their complexities and push the boundaries of what's possible. Beyond the books, I find solace and joy in the cricket field and lose myself in the captivating worlds of science-fiction movies. Driven by curiosity and a thirst for growth, I see every challenge as an opportunity to learn and evolve. In both my personal and professional endeavors, I strive to leave a positive impact, embracing each new experience with enthusiasm and determination. 
                    </p>
                </div>
            </div>
        </div>
      </Jump>
    </>
  )
}

export default About
