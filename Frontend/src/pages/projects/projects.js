import React from 'react'
import './projects.css'
import Spin from 'react-reveal/Spin';
import RubberBand from 'react-reveal/RubberBand';
const projects = () => {
  return (
    <>
    <div className='container project' id='project'>
        <RubberBand>
            <h2 className='col-12 mt-3 mb-1 text-center'>PROJECTS</h2>
            <hr></hr>
        </RubberBand>
        <div className="row" id="ads">
            <Spin>
                <div className="col-md-4">
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">MERN STACK</span>
                            <img src='Images/Expense-app.png' alt='project-1'></img>
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                            <span className='card-detail-badge'>MongoDB</span>
                            <span className='card-detail-badge'>ExpressJS</span>
                            <span className='card-detail-badge'>ReactJS</span>
                            <span className='card-detail-badge'>NodeJS</span>
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title'>
                                <h5 className='text-uppercase '>EXPENSE MANAGEMENT SYSTEM</h5>
                            </div>
                            <a  className='ad-btn'href='https://melodic-syrniki-6a9b6c.netlify.app/'>VIEW</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">Frontend</span>
                            <img src='Images/pass_generator.png' alt='project-2'></img>
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                            <span className='card-detail-badge'>HTML</span>
                            <span className='card-detail-badge'>CSS</span>
                            <span className='card-detail-badge'>Javascript</span>
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title'>
                                <h5 className='text-uppercase '>Password Generator</h5>
                            </div>
                            <a  className='ad-btn'href='https://github.com/Sambharya/Password-Generator'>VIEW</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">Frontend</span>
                            <img src='Images/Currency_converter.png' alt='project-3'></img>
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                            <span className='card-detail-badge'>HTML</span>
                            <span className='card-detail-badge'>CSS</span>
                            <span className='card-detail-badge'>Javascript</span>
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title'>
                                <h5 className='text-uppercase '>Currency Converter</h5>
                            </div>
                            <a  className='ad-btn'href='https://github.com/Sambharya/Currency-Converter'>VIEW</a>
                        </div>
                    </div>
                </div>
            </Spin>
        </div>
    </div>
    </>
  )
}

export default projects
