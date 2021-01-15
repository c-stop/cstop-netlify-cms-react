import React from 'react'
import Content from './Content'

export default function Testimonials({
  clientCompany,
  clientName,
  clientTestimonial,
}) {
  return (
    <div className="testimonial-item">
      <h4 className="heading">{clientName}</h4>
      <h5>{clientCompany}</h5>
      <blockquote className="block-quote">
        <Content source={clientTestimonial} />
      </blockquote>
    </div>
  )
}
