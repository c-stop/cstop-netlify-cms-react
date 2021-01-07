import React from 'react'
import BackgroundImage from './BackgroundImage'
import LazyImage from './LazyImage'
import './TeamMemberCard.sass'

export default ({ fields }) => {
  const { name, employeeTitle, employeePicture } = fields

  console.log(employeePicture)

  return (
    <div>
      <div
        className="team-pic"
        style={{ backgroundImage: `url(${ employeePicture })`}}
      >

        {/* {employeePicture && (
        <BackgroundImage src={employeePicture} opacity={0.4} />
      )} */}
        {/* <LazyImage
          className="team-pic-src" 
          src={employeePicture}
          alt={`${name}, ${employeeTitle}`}
        /> */}

        <div className="team-member-title-wrap">
          <div className="team-member-name">{name}</div>
          <div className="paragraph-light">{employeeTitle}</div>
        </div>
      </div>
    </div>
  )
}
