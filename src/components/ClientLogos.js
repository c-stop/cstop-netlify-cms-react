import uniqueId from "lodash/uniqueId"
import React from 'react'
import Slider from 'react-slick'
import './ClientLogos.sass'



export default function ClientLogos({ data }) {

  const settings = {
    lazyLoad: true,
    centerMode: true,
    infinite: true,
    dots: true,
    speed: 500,
  }

  return (
    <>
      <div className="section-heading-wrap">
        <h2 className="heading-jumbo-small">OUR CLIENTS</h2>
      </div>

      {/* <div style={{ width: '80%', margin: 'auto' }}> */}
      <Slider {...settings}>
        {data.map((client, index, array) => {
          return (
            <div className="logo-wrapper" key={uniqueId(`${client.companyName}_${index}`)}>
              {console.log('here is the array', array)}
              <img
                className="client-logo-img"
                id={uniqueId(`${client.companyName}_inner_${index }`)}
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
