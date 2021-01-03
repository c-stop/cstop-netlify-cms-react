import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './ClientLogos.sass'
import LazyImage from './LazyImage'

export default function ClientLogos({ data }) {
  const settings = {
    infinite: true,
    className: 'center',
    centerMode: true,
    autoplay: false,
    dots: true,
    speed: 800,
    variableWidth: true,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    adaptiveHeight: true,
  }

  return (
    <div className="section">
      <div className="section-heading-wrap">
        <h2 className="heading-jumbo-small">OUR CLIENTS</h2>
      </div>

      <Slider {...settings}>
        {data.map((client) => {
		 console.log(client) 
		  return (
            <LazyImage
              className="client-logo-img"
              src={client.image}
              alt={client.companyName}
            />
          )
        })}
        <img
          src="./cstop_apple.jpg"
          loading="lazy"
          id="w-node-bbf2de7b2e8a-2b4c63ca"
          alt=""
          className="client-logo-img"
        />
      </Slider>
      <div className="divider"></div>
    </div>
  )
}
