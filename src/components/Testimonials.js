import React, { useState } from 'react'
import Content from './Content'
import './Testimonials.sass'

export default function Testimonials({
  clientCompany,
  clientName,
  clientTestimonial,
  id
}) {
  const [drawerOpen, setDrawerOpen] = useState(false)
    // document.querySelector(`#${id}`).addEventListener('click', function(){
      // document.querySelector(`#testimonial-item`).classList.add('open')
    // })

  const handleClick = (e) =>{
    e.preventDefault()
    console.log(`Handling click`)
    setDrawerOpen(!drawerOpen)

  }

  // const showCard = (e) => {
  //   // const expandedCard = \
  //   return
  // }

  const testimonialState = drawerOpen ? 'open' : '';

  return (
    <div className={`testimonial-item ${testimonialState}`}  id={id} onClick={handleClick}>
      <div className="testimonial-heading">
        <h5 className="label cc-light client-company">{clientCompany}</h5>
        <h4 className="heading">{clientName}</h4>
      </div>
      <blockquote className="block-quote">
        <Content source={	clientTestimonial} />
      </blockquote>
    </div>
  )
}
