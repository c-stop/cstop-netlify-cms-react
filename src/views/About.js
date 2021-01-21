import { uniqueId } from 'lodash'
import React from 'react'
// import Slider from 'react-slick'
import ClientLogos from '../components/ClientLogos'
import Content from '../components/Content.js'
import Cta from '../components/Cta'
import PageHeader from '../components/PageHeader'
import TeamMemberCard from '../components/TeamMemberCard'
import Testimonials from '../components/Testimonials'
import './About.sass'

export default ({ fields }) => {
  const {
    aboutPageHeader,
    clientsSection,
    section2Container,
    teamMemberSection,
    testimonialSection,
  } = fields
  const { section1, title } = aboutPageHeader
  const { clientImages } = clientsSection
  const { section2, section2Title } = section2Container
  const { teamMembers } = teamMemberSection
  const {
    clientTestimonials,
    testimonialSubtitle,
    testimonialTitle,
  } = testimonialSection

  const root = document.documentElement

  document.addEventListener('mousemove', (evt) => {
    let x = evt.clientX / window.innerWidth
    let y = evt.clientY / window.innerHeight

    root.style.setProperty('--mouse-x', x)
    root.style.setProperty('--mouse-y', y)
  })

  return (
    <div className="About">
      <PageHeader
        title={title}
        subtitle={section1}
        backgroundImage={aboutPageHeader.featuredImage}
        className="about-header"
      />

      <div
        className="snap container section"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="section-heading-wrap">
          <h2>
            Our world-class team
            <br />
          </h2>
        </div>
        <div className="w-layout-grid team-members">
          {teamMembers.map((employee) => {
            return <TeamMemberCard key={uniqueId(`ab_`)} fields={employee} />
          })}
        </div>
      </div>

      <div className="snap section">
        <div className="about-content" data-aos="fade-up" data-aos-delay="200">
          <p className="heading-jumbo-small">{section2Title}</p>
          <Content className="paragraph-smaller" source={section2} />
        </div>

        <div
          className="testimonial-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="section-heading-wrap">
            <div className="label cc-light">{testimonialSubtitle}</div>
            <div
              className="heading-jumbo-small"
              style={{ marginBottom: '2rem' }}
            >
              {testimonialTitle} <br />
            </div>
          </div>
          {clientTestimonials.map((testimonial, index) => {
            return (
              <>
                <Testimonials
                  {...testimonial}
                  id={`ct_${index}`}
                  key={`${testimonial.clientCompany}_${index}`}
                />
              </>
            )
          })}
        </div>
      </div>

      <div
        className="snap about-client-container section "
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <ClientLogos data={clientImages} />
      </div>

      <div
        className="snap Cta"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-anchor-placement="center-bottom"
      >
        <Cta />
      </div>
    </div>
  )
}
