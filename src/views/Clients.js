import { uniqueId } from 'lodash'
import React from 'react'
import LazyImage from '../components/LazyImage'
import './Clients.sass'

export default ({ fields }) => {
  const {
    brandLogos,
    industryLogos,
    productionCompanyLogos,
    healthLogos,
  } = fields

  const openTab = (event, tabName) => {
    var i, x, tablinks

    x = document.getElementsByClassName('clients-list')

    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }

    tablinks = document.getElementsByClassName('tabLink')

    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' selected', '')
    }

    document.getElementById(tabName).style.display = 'block'
    event.currentTarget.className += ' selected'
  }

  const arrayToGrid = (section) => {
    return (
      <div className="client-logo-grid">
        {section.map((logo, index) => {
          return (
            <LazyImage
              src={logo.brandLogo}
              alt={logo.brandName}
              className="client-logo"
              key={uniqueId(`${logo.brandName}_${index}`)}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="Clients container">
      <div className="clients-nav-container">
        <div className="clients-nav-buttons">
          <a className="tabLink" onClick={(e) => openTab(e, 'brands')}>
            Brands
          </a>
          <a
            className="tabLink"
            onClick={(e) => openTab(e, 'productionCompanies')}
          >
            Production Companies
          </a>
          <a className="tabLink" onClick={(e) => openTab(e, 'industryLeaders')}>
            Industry Leaders
          </a>
          <a
            className="tabLink"
            onClick={(e) => openTab(e, 'healthOrganizations')}
          >
            Health Organizations
          </a>
        </div>
      </div>

      <div
        id="brands"
        className="clients-list"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {arrayToGrid(brandLogos)}
      </div>

      <div
        id="productionCompanies"
        className="clients-list"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {arrayToGrid(productionCompanyLogos)}
      </div>

      <div
        id="industryLeaders"
        className="clients-list"
      >
        {arrayToGrid(industryLogos)}
      </div>

      <div
        id="healthOrganizations"
        className="clients-list"
      >
        {arrayToGrid(healthLogos)}
      </div>
    </div>
  )
}
