import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import ClientLogos from '../components/ClientLogos'
import Content from '../components/Content.js'
import Cta from '../components/Cta'
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
    clientImages,
  } = fields

  console.log(fields)

  const settings = {
    dots: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    lazyLoad: true,
    cssEase: 'linear',
  }
  const root = document.documentElement

  document.addEventListener('mousemove', (evt) => {
    let x = evt.clientX / window.innerWidth
    let y = evt.clientY / window.innerHeight

    root.style.setProperty('--mouse-x', x)
    root.style.setProperty('--mouse-y', y)
  })

  return (
    <div className="About">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      <div className=" about-client-container ">
        <div className="story-wrap">
          <Content source={section1} className="paragraph-dark" />
        </div>

        <ClientLogos data={clientImages} />
      </div>

      <div className="section">
        <div className="about-content">
          <p className="paragraph-smaller">{section2}</p>
        </div>
      </div>

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

      <div className="section-3">
        <div className="section-heading-wrap">
          <h2>
            See Us In Action
            <br />
          </h2>
        </div>

        <div>
          <Slider {...settings}>
            {/* <div><img src={cStopPerson} alt="PlaceHolder " /></div> */}
            {/* {imageGallery.map(({ image, description }) => {
              return (
                <img
                  className="image-gallery-src"
                  src={image}
                  alt={description}
                />
              )
            })} */}
          </Slider>
        </div>
      </div>
      <div className="Cta">
        <Cta />
      </div>
    </div>
  )
}
