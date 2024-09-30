import React from 'react'
import './Experience.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaChalkboardTeacher } from "react-icons/fa";
const Experience = () => {
  return (
    <>
    <div className=' experience' id='experience'>
        <div className='container work-exp'>
            <h2 className='col-12 mt-3 mb-1 text-center'>EXPERIENCE</h2>
            <hr></hr>
        </div>
        <VerticalTimeline lineColor='black'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  black' }}
                date="JUNE'2024' - JULY'2024'"
                iconStyle={{ background: '#0a5d59', color: '#fff' }}
                icon={<FaChalkboardTeacher />}
            >
                <h3 className="vertical-timeline-element-title">JSPARK (Noida)</h3>
                <h4 className="vertical-timeline-element-subtitle">
                During my internship at JSPARK as a frontend developer, I contributed to the development of the company's official website using HTML, CSS, and JavaScript. I collaborated with a team to implement dynamic features and ensure a responsive user interface. Additionally, I worked on the Emergency Response Management System (ERMS) project using React.js, enhancing user experience and performance optimization.
                </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  black' }}
                date="2022"
                iconStyle={{ background: '#0a5d59', color: '#fff' }}
                icon={<FaChalkboardTeacher />}
            >
                <h3 className="vertical-timeline-element-title">Desh Ke Mentor (DKM)</h3>
                <h4 className="vertical-timeline-element-subtitle">
                I had the privilege of serving as a mentor to students from Government Schools 
                in Delhi through the <b>DESH KE MENTOR program</b>, initiated by the Delhi Government. 
                It was a rewarding experience to guide and support these young minds, contributing 
                to their academic and personal growth.
                </h4>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    </>
  )
}

export default Experience
