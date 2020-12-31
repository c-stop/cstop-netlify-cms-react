import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
import VideoHeader from '../components/VideoHeader'
import './Home.sass'

export default ({ fields }) => {
  console.log(fields)
  const {
    title,
    subtitle,
    carouselTitle,
    buttonText,
    buttonLinkTo,
    featuredImage,
    body,
    featuredVideo,
  } = fields

  AOS.init()

  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4500,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    vertical: true,
  }

  return (
    <main className="Home">
      {/* Import starts here */}
      <div className="intro-header">
        {/* <VideoHeader
          large
          title={title}
          subtitle={subtitle}
          backgroundVideo={featuredVideo}
        /> */}

        <video muted loop autoPlay id="myVideo">
          <source src="/images/Film-set.mp4" type="video/mp4" />
        </video>

        <div className="intro-content cc-homepage">
          <div data-aos="fade-up" data-aos-delay="150">
            <div className="heading-jumbo intro-logo">
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
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="intro-text"
            style={{ overflow: 'hidden' }}
          >
            <div className="paragraph-bigger cc-bigger-white-light">
              <h3>{subtitle}</h3>
              <br />
            </div>
            <Link
              to={buttonLinkTo}
              className="Button Jumbo-button inline-block"
            >
              <div>{buttonText}</div>
            </Link>
          </div>
        </div>
        <div className="intro-subsection">
          <div className="divider"></div>

          <div
            className="label cc-light subsection"
            style={{ textTransform: 'uppercase', color: 'white' }}
          >
            <h4>{carouselTitle}</h4>

            <div className="subsection-client">
              <Slider {...settings}>
                <h4>Apple</h4>
                <h4>Toyota</h4>
                <h4>Zenni</h4>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Example here 

      <PageHeader
        large
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      <div className="section">
        <div className="container">
          <Content source={body} />
        </div>
      </div> 
      
      */}
    </main>
  )
}
