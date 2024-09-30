import React ,{useState} from 'react'
import './MobileNav.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FcHome,FcAbout ,FcBusinessContact,FcBusinessman} from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdSchool } from "react-icons/md";
import { Link } from 'react-scroll';
const MobileNav = () => {
    const [open , setOpen] = useState(false);
    //handel open
    const handleOpen =() => {
        setOpen(!open);
    };
    //handle menu clicks
    const handleMenuClick = ()=> {
        setOpen(false);
    };
  return (
    <>
    <div className='mobile-nav'>
        <div className='mobile-nav-header'>
            {open ? (<AiOutlineMenuFold size={30} className='mobile-nav-icon' onClick={handleOpen}></AiOutlineMenuFold>):
            (<GiHamburgerMenu size={30} className='mobile-nav-icon' onClick={handleOpen}></GiHamburgerMenu>)}

            <span className='mobile-nav-title'>My Portfolio</span>
        </div>
        {open && (
            <div className='mobile-nav-menu'>
                <div className='nav-items'>
                    <div className='nav-item'>
                        <div className='nav-link'>
                            <Link to='home' spy={true} smooth={true} offset={-100} duration={100}
                            onClick={handleMenuClick}  >
                                <FcHome size={20}/>
                                Home
                            </Link>
                        </div>
                        <div className='nav-link'>
                            <Link to='about' spy={true} smooth={true} offset={-100} duration={100} 
                            onClick={handleMenuClick} >
                                <FcAbout size={20}/>
                                About Me
                            </Link>
                        </div>
                        <div className='nav-link'>
                            <Link to='edu' spy={true} smooth={true} offset={-100} duration={100}
                             onClick={handleMenuClick} >
                                <MdSchool size={20}/>
                                Education
                            </Link>
                        </div>
                        <div className='nav-link'>
                            <Link to='skill' spy={true} smooth={true} offset={-100} duration={100}
                            onClick={handleMenuClick}  >
                                <GiSkills size={20}/>
                                Skills
                            </Link>
                        </div>
                        <div className='nav-link'>
                            <Link to='project' spy={true} smooth={true} offset={-100} duration={100}
                            onClick={handleMenuClick}  >
                                <GrProjects size={20}/>
                                Projects
                            </Link>
                        </div>
                        <div className='nav-link'>
                            <Link to='experience' spy={true} smooth={true} offset={-100} duration={100}
                            onClick={handleMenuClick}  >
                                <FcBusinessman size={20}/>
                                Experience
                            </Link>
                        </div>
                        <div className='nav-link'>
                            <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}
                            onClick={handleMenuClick}  >
                                <FcBusinessContact size={20}/>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
    </>
  )
}

export default MobileNav
