import React from 'react'
import './TeamMemberCard.sass'

export default ({ fields }) => {
  const { name, employeeTitle, employeePicture, employeeQuote } = fields


  return (
    <div>
      <div
        className="team-card-wrapper"
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

        <div className="team-member-title-wrap" >
          <div className="team-member-quote">"   {employeeQuote}"</div>
          <div className="paragraph-light">{employeeTitle}</div>
          <div className="team-member-name">{name}</div>
        </div>

      </div>
    </div>
  )
}
