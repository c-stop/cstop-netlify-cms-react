import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import ClientLogos from '../components/ClientLogos'
import Content from '../components/Content.js'
import Cta from '../components/Cta'
import LazyImage from '../components/LazyImage'
import PageHeader from '../components/PageHeader'
import TeamMemberCard from '../components/TeamMemberCard'
import './About.sass'

export default ({ fields }) => {
  const {
    title,
    subtitle,
    featuredImage,
    section1,
    section2,
    teamMembers,
    imageGallery,
  } = fields

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
    cssEase: 'linear',
  }

  return (
    <div className="About">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      <div className="container">
        <div className="story-wrap">
          <Content source={section1} className="paragraph-dark" />
        </div>
      </div>

      {/* <ClientLogos />6 */}

      <div className="section">
        <div className="about-content">
          <p className="paragraph-smaller">{section2}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="section-heading-wrap">
            <h2>
              Our world-class team
              <br />
            </h2>
          </div>
          <div className="w-layout-grid team-members">
            {teamMembers.map((employee) => {
              return <TeamMemberCard fields={employee} />
            })}
          </div>
        </div>
      </div>

      <div className="section-3">
        <div className="section-heading-wrap">
          <h2>
            See Us In Action
            <br />
          </h2>
        </div>

        <div className="w-container">
          <Slider {...settings}>
            {/* <div><img src={cStopPerson} alt="PlaceHolder " /></div> */}
            {imageGallery.map(({image, description} = image) => {
              console.log(image, description)
              return (
                <LazyImage
                  className="image-gallery-src"
                  src={image}
                  alt={description}
                />
              )
            })}
          </Slider>
        </div>
      </div>
      <div className="section Cta">
        <Cta />
      </div>
    </div>
  )
}
