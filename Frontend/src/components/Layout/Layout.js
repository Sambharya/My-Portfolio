import React ,{useState} from 'react'
import Home from '../../pages/Home/Home';
import "./Layout.css";
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from "react-icons/ai";
import Menu from '../Menus/Menu';
const Layout = () => {
  const[toggle,setToggle] = useState(true);
  //change toggle
  const handleToggle = () =>{
    setToggle(!toggle);
  }
  return (
      <>
      <div className='sidebar-section'>
        <div className={toggle ? 'sidebar-toggle sidebar' : 'sidebar' }>
            <div className='sidebar-toggle-icons'>
              <p onClick={handleToggle}>
                {/* we use below as same as in c++, if else condition uisng ? */}
                {toggle ? <AiOutlineDoubleLeft size={40}></AiOutlineDoubleLeft> :
                <AiOutlineDoubleRight size={40}></AiOutlineDoubleRight> } 
              </p>
            </div>
            {<Menu toggle = {toggle}></Menu>   /*here use toogle for destructuring in menu.js */}
        </div>
        <div className='container'>
            <Home></Home>
        </div>
      </div>
      </>
  )
}

export default Layout
