import uniqueId from 'lodash/uniqueId'
import React from 'react'
import './ClientLogos.sass'
import LazyImage from './LazyImage'

export default function ClientLogos({ data }) {
  // const settings = {
  //   lazyLoad: true,
  //   centerMode: true,
  //   infinite: true,
  //   dots: true,
  //   speed: 500,
  // }

  return (
    <>
      <div className="section-heading-wrap">
        <h2 className="heading-jumbo-small">OUR CLIENTS</h2>
      </div>

      <div className="client-logo-grid">
        {data.map((client, index, array) => {
          return (
            <div
              className="logo-wrapper"
              key={uniqueId(`${client.companyName}_${index}`)}
            >
              <LazyImage
                className="client-logo-img"
                id={uniqueId(`${client.companyName}_inner_${index}`)}
                src={client.image}
                alt={client.companyName}
                width="100px"
                height="100px"
              />
            </div>
          )
        })}
      </div>
    </>
  )
}
