//install react-vertical-line component
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'
import { MdSchool } from "react-icons/md";
const Education = () => {
  return (
    <>
        <div className='container education' id='edu'>
        <h2 className='col-12 mt-3 mb-1 text-center'>EDUCATION DETAILS</h2>
        <hr></hr>
        {/* below code is just copy paste from npm site from which we install VerticalTimeline package */}
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2019"
                iconStyle={{ background: '#0a5d59', color: '#fff' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">Class X</h3>
                <h4 className="vertical-timeline-element-subtitle">B.D.S Vidya Mandir, Noida</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2021"
                iconStyle={{ background: '#0a5d59', color: '#fff' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">Class XII</h3>
                <h4 className="vertical-timeline-element-subtitle">B.D.S Vidya Mandir, Noida</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2021 - 2025"
                iconStyle={{ background: '#0a5d59', color: '#fff' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">B.Tech in Mathematics and Computing</h3>
                <h4 className="vertical-timeline-element-subtitle">Delhi Technological University(DTU),IN</h4>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    </>    
  )
}

export default Education
