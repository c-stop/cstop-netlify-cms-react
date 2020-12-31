import React from 'react'
import AOS from 'aos'

import Slider from 'react-slick'
import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
// import vidClip from '../../img/Film-set.mp4'

import './Home.css'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export default ({ fields }) => {
  const { title, subtitle, featuredImage, body } = fields

  AOS.init();

  const settings = {
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		speed: 1500,
		autoplaySpeed: 4500,
		cssEase: "linear",
		dots: false,
		arrows: false,
		vertical: true,
  };
  
  return (
    <main className="Home">
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
      
    </main>
  )
}
