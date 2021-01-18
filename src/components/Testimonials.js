import React from 'react'
import Content from './Content'
import './Testimonials.sass'

export default function Testimonials({
  clientCompany,
  clientName,
  clientTestimonial,
  id
}) {
  console.log(id)
  const handleClick = (e) =>{
    e.preventDefault()
    console.log("pihng")
    // document.querySelector(`.testimonial-item`).classlist.add('open')
    // document.querySelector(`.testimonial-item`).addEventListener('click', function(){
    //   // document.querySelector(`#testimonial-item`).classList.add('open')

    // })
  }

  // const showCard = (e) => {
  //   // const expandedCard = \
  //   return
  // }


  return (
    <div className="testimonial-item open" id={`2`} onClick={handleClick}>
      <div className="testimonial-heading">
        <h5 className="label cc-light client-company">{clientCompany}</h5>
        <h4 className="heading">{clientName}</h4>
      </div>
      <blockquote className="block-quote">
        <Content source={clientTestimonial} />
      </blockquote>
    </div>
  )
}
