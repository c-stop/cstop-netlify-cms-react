import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import PageHeader from '../components/PageHeader'
import LazyImage from '../components/LazyImage'
import Content from '../components/Content.js'
import ClientLogos from '../components/ClientLogos'
import Cta from "../components/Cta"
import './About.sass'

export default ({ fields }) => {
  const { title, subtitle, featuredImage, section1, section2 } = fields

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

      <ClientLogos />

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
            <div>
              <div className="team-pic">
                <LazyImage
                  className="team-pic-src"
                  src={featuredImage}
                  alt="Kia Kiso"
                />
              </div>
              <div className="team-member-title-wrap">
                <div className="team-member-name">Pepper Humphrey</div>
                <div className="paragraph-light">CEO</div>
              </div>
            </div>
            <div>
              <div className="team-pic">
                <LazyImage
                  className="team-pic-src"
                  src={featuredImage}
                  alt="Kia Kiso"
                />
              </div>
              <div className="team-member-title-wrap">
                <div className="team-member-name">Kia Kiso</div>
                {/* <div className="paragraph-light">CEO</div> */}
              </div>
            </div>
            <div>
              <div className="team-pic">
                <LazyImage
                  className="team-pic-src"
                  src={featuredImage}
                  alt="Kia Kiso"
                />
              </div>
              <div className="team-member-title-wrap">
                <div className="team-member-name">Pepper Humphrey</div>
                <div className="paragraph-light">CEO</div>
              </div>
            </div>
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
            <div>
              {/* <img src={cStopPerson} alt="PlaceHolder " /> */}
            </div>
            <div>
              {/* <img src={placeHolder} alt="PlaceHolder" /> */}
            </div>
            <div>
              {/* <img src={cStopPerson} alt="PlaceHolder" /> */}
            </div>
          </Slider>
        </div>
      </div>
      <div className="section Cta">
        <Cta />
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
