import React from 'react'
import LazyImage from './LazyImage'
import "./TeamMemberCard.sass"

export default ({ fields }) => {
  const { name, employeeTitle, employeePicture } = fields
  console.log("emp fields: ", fields)
  return (
    <div>
      <div className="team-pic">
        <LazyImage
          className="team-pic-src"
          src={employeePicture}
          alt={`${name}, ${employeeTitle}`}
        />
      </div>
      <div className="team-member-title-wrap">
        <div className="team-member-name">{name}</div>
        <div className="paragraph-light">{employeeTitle}</div>
      </div>
    </div>
  )
}
