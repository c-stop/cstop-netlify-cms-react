import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './Home.sass'

export default ({ fields }) => {
  const {
    // title,
    subtitle,
    buttonText,
    buttonLinkTo,
    // featuredImage,
    // body,
    // featuredVideo,
    featuredClients,
  } = fields

  const { carouselTitle, featuredClientsLogos } = featuredClients

  AOS.init()

  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4500,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    // vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <main className="Home">
      {/* Import starts here */}
      <video muted loop autoPlay id="myVideo">
        <source src="/images/Film-set.mp4" type="video/mp4" />
      </video>

      <div className="intro-header">
        <div className="intro-content cc-homepage">
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="heading-jumbo intro-logo"
          >
            <img
              alt="Logo Of Cstop"
              className="logoImage"
              src="images/logos/cStopIconColor.png"
            />
            <img
              alt="Cstop- orange and blue text logo"
              className="logoText"
              style={{ paddingLeft: '20px' }}
              src="images/logos/cStopFullColorTextNew.svg"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="intro-text"
            style={{ overflow: 'hidden' }}
          >
            <div className="paragraph-bigger cc-bigger-white-light">
              <h5 className="intro-subtitle">{subtitle}</h5>
              <br />
            </div>
            <Link to={buttonLinkTo} className="Button inline-block">
              <div>{buttonText}</div>
            </Link>
          </div>
        </div>
        <div
          className="intro-subsection"
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-anchor="top-top"
          className="intro-text"
        >
          <div className="divider"></div>

          <div
            className="label cc-light subsection"
            style={{ textTransform: 'uppercase', color: 'white' }}
          >
            <h4>{carouselTitle}</h4>

            <div className="subsection-client">
              <Slider {...settings}>
                {featuredClientsLogos.map((image) => {
                  return (
                    <img
                      id={image.companyName}
                      src={image.companyLogo}
                      alt={image.companyName}
                    />
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
