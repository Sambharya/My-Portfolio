import React from 'react'
import './Techskills.css'
import { TechSkillsList } from '../../utils/TechSkillsList'
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';
const Techskills = () => {
  return (
    <>
    <div className='container techskills' id='skill'>
      <RubberBand>
        <h2 className='col-12 mt-3 mb-1 text-center'>TECHNICAL SKILLS</h2>
        <hr></hr>
      </RubberBand> 
        <div className="row">
          {TechSkillsList.map((tech) => (    // by this we traverse the whole array object 
              <Fade left>
                <div key={tech._id} className="col-md-3">
                  <div className="card m-2">
                    <div className="card-content">
                      <div className="card-body">
                        <div className="media d-flex justify-content-center">
                          <div className="alig-self-center">
                            <tech.icon  className="tech-icon" />
                          </div>
                          <div className="media-body">
                            <h5>{tech.name}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
          ))}
        </div>
    </div>
    </>
  )
}

export default Techskills
