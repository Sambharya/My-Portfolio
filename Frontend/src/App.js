import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techskills from "./pages/TechSkills/Techskills";
import Projects from "./pages/projects/projects";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Tada from 'react-reveal/Tada';
import ScrollToTop from "react-scroll-to-top"; // we install the npm package of scroll to top
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <MobileNav></MobileNav>
      <Layout></Layout>
      <div className="container">
        <About></About>
        <Education></Education>
        <Techskills></Techskills>
        <Projects></Projects>
        <Experience></Experience>
        <Contact></Contact>
      </div>

      <div className="footer pb-3 ms-5">
        <Tada>
            <h5 className="text-center txt1" style={{color:'#1e5250'}}>Designed and Developed by Abhishek Sambharya &copy;
            </h5>
            <h5 className="text-center txt2"style={{color:'#1e5250'}}>All Rights Reserved</h5>
        </Tada>
      </div>
      <ScrollToTop smooth
        color="#f29f67"
        style={{backgroundColor:'#1e1e2c', borderRadius:"80px"}}
       />
    </div>
  );
}

export default App;
