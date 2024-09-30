import React from 'react'
import "./Menu.css";
import { FcHome,FcAbout ,FcBusinessContact,FcBusinessman} from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdSchool } from "react-icons/md";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
//we install the react-scroll npm package to active the menu icons
import { Link } from 'react-scroll';
const Menu = ({toggle}) => {  //destructuring by {toggle}
  return (
    <>
    {toggle ? (
        <>
            <Zoom>
                <div className='navbar-profile-pic'>
                    <img src="Images/portfolio-pic1.png" alt="profile pic" />
                </div>
            </Zoom>
            <Fade left>
                <div className='nav-items'>
                    <div className='nav-item'>
                        <div className='nav-link'>
                            <Link to='home' spy={true} smooth={true} offset={-100} duration={100} >
                                <FcHome size={20}/>
                                Home
                            </Link>
                        </div>
                        <div className='nav-link'>
                            <Link to='about' spy={true} smooth={true} offset={-100} duration={100} >
                                <FcAbout size={20}/>
                                About Me
                            </Link>
                        </div>
                        <div className='nav-link'>
                            <Link to='edu' spy={true} smooth={true} offset={-100} duration={100} >
                                <MdSchool size={20}/>
                                Education
                            </Link>
                        </div>
                        <div className='nav-link'>
                            <Link to='skill' spy={true} smooth={true} offset={-100} duration={100} >
                                <GiSkills size={20}/>
                                Skills
                            </Link>
                        </div>
                        <div className='nav-link'>
                            <Link to='project' spy={true} smooth={true} offset={-100} duration={100} >
                                <GrProjects size={20}/>
                                Projects
                            </Link>
                        </div>
                        <div className='nav-link'>
                            <Link to='experience' spy={true} smooth={true} offset={-100} duration={100} >
                                <FcBusinessman size={20}/>
                                Experience
                            </Link>
                        </div>
                        <div className='nav-link'>
                            <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} >
                                <FcBusinessContact size={20}/>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </Fade>
       </>
    ) : 
    <>
    <div className='nav-items'>
    <div className='nav-item'>
        <div className='nav-link'>
        {/* using title , when we place cursor on it home text is display on icon  */}
            <Link to='home' spy={true} smooth={true} offset={-100} duration={100} >
                <FcHome title='Home' size={25}/>
            </Link>
        </div>
        <div className='nav-link'>
            <Link to='about' spy={true} smooth={true} offset={-100} duration={100} >
                <FcAbout title='About Me' size={25}/>
            </Link>
        </div>
        <div className='nav-link'>
            <Link to='edu' spy={true} smooth={true} offset={-100} duration={100} >
                <MdSchool title='Education' size={25}/>
            </Link>
        </div>
        <div className='nav-link'>
            <Link to='skill' spy={true} smooth={true} offset={-100} duration={100} >
                <GiSkills title='Skills' size={25}/>
            </Link>
        </div>
        <div className='nav-link'>
            <Link to='project' spy={true} smooth={true} offset={-100} duration={100} >
                <GrProjects title='Projects' size={25}/>
            </Link>
        </div>
        <div className='nav-link'>
           <Link to='experience' spy={true} smooth={true} offset={-100} duration={100} >
                <FcBusinessman title='Experience' size={25}/>
            </Link>
        </div>
        <div className='nav-link'>
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} >
                <FcBusinessContact title='contact' size={25}/>
            </Link>
            </div>
        </div>
    </div>
    </>
    }
    </>
  )
}

export default Menu
