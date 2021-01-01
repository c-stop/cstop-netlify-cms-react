import React from 'react'

import PageHeader from '../components/PageHeader'
import LazyImage from '../components/LazyImage'
import Content from '../components/Content.js'
import './About.sass'

export default ({ fields }) => {
  const { title, subtitle, featuredImage, section1, section2 } = fields

  return (

    <div className='About'>
      
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />
      

      <div className='container'>
        <div className='story-wrap'>
          <Content source={section1} className="paragraph-dark" />
        </div>
      </div>

      <div className="section">
				<div className="about-content">
					<p className="paragraph-smaller">
						Thoroughly trained in infection prevention and control through the World
						Health Organization course for COVID-19 Virus + C19CO + OSHA 30 and more.
						Keeping our sets safe takes pre-planning, collaborating, organizational
						skills, insightful conversations, compassion, strength, knowledge,
						presentation materials and more. We need to anticipate, be proactive, and
						solution oriented.
					</p>
				</div>
			</div>
      
      {/* 
      <div className='section'>
        <div className='container'>
          <Content source={section2} />
          <p>The image below is a {'<LazyImage />'}</p>
          <LazyImage src={featuredImage} alt='LazyImage' />
        </div>
      </div> */}

    </div>

  )

}
