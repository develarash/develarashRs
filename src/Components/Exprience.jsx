import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import "../styles/exprience.css"
 import {getBlogss} from "./api_main/api.js"
const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement icon={<SchoolIcon/>} iconStyle={{background:"var(--f3)" ,color:"black"}} date='2016 - 2019' className='vertical-timeline-element--education'>
          <h3 className='vertical-timeline-element-title'>Saipa High School of Computer Science and Software</h3>
          <p >Software diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<SchoolIcon/>} iconStyle={{background:"var(--f3)" ,color:"black"}} date='2019 - until now' className='vertical-timeline-element--education'>
          <h3 className='vertical-timeline-element-title'>Sama University of Computer Software and Data Sciences</h3>
          <p>Associate Degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<WorkIcon />} iconStyle={{background:"var(--f3)" ,color:"black"}} date='2020 - 2018' className='vertical-timeline-element--education'>
          <h3 className='vertical-timeline-element-title'>Dried fruit and nuts export company</h3>
          <p>Site manager and SEO</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<WorkIcon />} iconStyle={{background:"var(--f3)" ,color:"black"}} date='2020 - 2021' className='vertical-timeline-element--education'>
          <h3 className='vertical-timeline-element-title'> Printing and packaging innovation startup</h3>
          <p>Frontend developer and SEO</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<WorkIcon />} iconStyle={{background:"var(--f3)" ,color:"black"}} date='2021 - until now' className='vertical-timeline-element--education'>
          <h3 className='vertical-timeline-element-title'>Work in the distribution and export company of dried fruits and nuts</h3>
          <p>ّFullstack developer and Website manager</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  )
}

export default Experience