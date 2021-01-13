import React from 'react'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import './Services.sass'
import { uniqueId } from 'lodash'

export default ({ fields }) => {
  const { title, subTitle, featuredImage, section1, section2 } = fields

  const {
    serviceBackground,
    belowServicesBody,
    belowServicesTitle,
    section2Body,
    section2Subtitle,
    section2Title,
    smallSections,
  } = section2

  const { section1Title, section1Body } = section1

  const backgroundImage = () => {
    return serviceBackground === !undefined
      ? `URL(${serviceBackground})`
      : `none`
  }

  return (
    <div className="Service">
      <PageHeader
        title={title}
        subtitle={subTitle}
        backgroundImage={featuredImage}
      />

      <div className="container">
        <div className="story-wrap">
          <div className="heading-jumbo-small">{section1Title}</div>
          <p className="paragraph-dark">{section1Body}</p>
        </div>
        <div className="divider" />
      </div>

      <div
        className="section service-container"
        style={{ backgroundImage: { backgroundImage } }}
      >
        <div className="container ">
          <div className="section-heading-wrap">
            <div className="label">{section2Subtitle}</div>
            <h2>{section2Title}</h2>
            {section2Body}
          </div>

          <div className="our-services-grid">
            {smallSections.map((card) => {
              return (
                <div key={uniqueId(`sv_`)}>
                  <img
                    src="images/Icon-1.svg"
                    width="50"
                    alt=""
                    className="service-icon"
                  />
                  <div className="paragraph-bigger">{card.title}</div>
                  <div className="paragraph-light">{card.body}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="container story-wrap">
          <h2 className="heading-jumbo-small">{belowServicesTitle}</h2>
          <Content src={belowServicesBody} className="paragraph-dark" />
          <a href="mailto:solutions@c-stop.services" className="Button">
            Talk to a Specialist
          </a>
        </div>
      </div>
    </div>
  )
}
