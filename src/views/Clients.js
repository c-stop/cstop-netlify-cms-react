import React from 'react'
import PageHeader from '../components/PageHeader'
import './Clients.sass'

export default ({ fields }) => {

  function openTab(event, tabName) {
    console.log("ping", tabName)
    var i, x, tablinks;

    x = document.getElementsByClassName('clients-list');

    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }

    tablinks = document.getElementsByClassName('tabLink');

    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' w3-red', '')
    }

    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.className += ' w3-red'
  }


  return (
    <div className="Clients container">
      <div className="clients-nav-container">
        <div className="clients-nav-buttons">
          <a className="tabLink" onClick={(e) => openTab(e, "brands")}>Brands</a>
          <a className="tabLink" onClick={(e) => openTab(e, "productionCompanies")}>Production Companies</a>
          <a className="tabLink" onClick={(e) => openTab(e, "industryLeaders")}>Industry Leaders</a>
        </div>
      </div>

      <div id="brands" className="clients-list">
        brands
      </div>

      <div id="productionCompanies" className="clients-list">
        Production companies
      </div>

      <div id="industryLeaders" className="clients-list">
        industry Leaders
      </div>
    </div>
  )
}
