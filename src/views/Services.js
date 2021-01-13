import React from 'react'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import './Services.sass'

export default ({ fields }) => {
  const {
    title,
    subTitle,
    featuredImage,
    section1,
    section2,
  } = fields

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

  console.log(fields)

  const backgroundImage = () => {
    return serviceBackground === !undefined
      ? `URL(${serviceBackground})`
      : `none`
  }

  console.log(backgroundImage())

  return (
    <div className="Service">
      <PageHeader
        title={title}
        subtitle={subTitle}
        backgroundImage={featuredImage}
      />

      <div class="container">
        <div class="story-wrap">
          <div class="heading-jumbo-small">{section1Title}</div>
          <p class="paragraph-dark">{section1Body}</p>
        </div>
        <div class="divider" />
      </div>

      <div
        class="section service-container"
        style={{ backgroundImage: { backgroundImage } }}
      >
        <div class="container ">
          <div class="section-heading-wrap">
            <div class="label">{section2Subtitle}</div>
            <h2>{section2Title}</h2>
            {section2Body}
          </div>

          <div class="our-services-grid">
            {smallSections.map((card) => {
              return (
                <div>
                  <img
                    src="images/Icon-1.svg"
                    width="50"
                    alt=""
                    class="service-icon"
                  />
                  <div class="paragraph-bigger">{card.title}</div>
                  <div class="paragraph-light">{card.body}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div class="container story-wrap">
          <h2 class="heading-jumbo-small">{belowServicesTitle}</h2>
          <Content src={belowServicesBody} className="paragraph-dark" />
          <a href="mailto:solutions@c-stop.services" className="Button">
            Talk to a Specialist
          </a>
        </div>
      </div>
    </div>
  )
}
