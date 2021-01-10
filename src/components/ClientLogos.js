import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './ClientLogos.sass'
import LazyImage from './LazyImage'

export default function ClientLogos({ data }) {
  const settings = {
    className: 'center',
    lazyLoad: true,
    centerMode: true,
    infinite: true,
    dots: true,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  }

  return (
    <>
      <div className="section-heading-wrap">
        <h2 className="heading-jumbo-small">OUR CLIENTS</h2>
      </div>

      {/* <div style={{ width: '80%', margin: 'auto' }}> */}
      <Slider {...settings}>
        {data.map((client) => {
          return (
            <div className="logo-wrapper">
              <img
                className="client-logo-img"
                id={client.companyName}
                src={client.image}
                alt={client.companyName}
              />
              {/* <LazyImage
                  className="client-logo-img"
                  src={client.image}
                  alt={client.companyName}
                /> */}
            </div>
          )
        })}
      </Slider>
      {/* </div> */}
      {/* <div className="divider"></div> */}
    </>
  )
}
