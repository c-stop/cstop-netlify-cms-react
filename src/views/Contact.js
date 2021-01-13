import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
import './Contact.sass'

export default ({ fields }) => {
  const {
    title,
    subtitle,
    featuredImage,
    email,
    // workHours,
    applySection,
  } = fields

  const { applyTitle, applySubtitle, applyBody, applyButton } = applySection

  return (
    <div className="Contact">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      <div className="container">
        <div className="w-layout-grid contact-form-grid">
          <div id="w-node-509be705858e-184c63d4" className="contact-form-wrap">
            <div className="contact-form-heading-wrap">
              <h2 className="contact-heading">Contact us</h2>
              <div className="paragraph-light">
                We welcome your inquiries, fill out the form below or reach out to us directly.
                <a
                  href="mailto:solutions@c-stop.services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="contact-form w-form">
              <form
                data-name="Get In Touch Form"
                name="wf-form-Get-In-Touch-Form"
                className="get-in-touch-form"
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="text-field cc-contact-field input"
                  maxLength="256"
                  name="name"
                  data-name="Name"
                  placeholder="Enter your name"
                  id="Name"
                />
                <label htmlFor="Email-2">Email Address</label>
                <input
                  type="email"
                  className="text-field cc-contact-field input"
                  maxLength="256"
                  name="Email"
                  data-name="Email"
                  placeholder="Enter your email"
                  id="Email"
                  required=""
                />
                <label htmlFor="Message">Message</label>
                <textarea
                  id="Message"
                  name="Message"
                  placeholder="Hi there, I’m reaching out because I think we can collaborate…"
                  maxLength="5000"
                  data-name="Message"
                  className="text-field cc-textarea cc-contact-field input"
                ></textarea>
                <input
                  type="submit"
                  value="Submit"
                  data-wait="Please wait..."
                  className="Button"
                />
              </form>
              {/* <div className="status-message cc-success-message w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="status-message cc-error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div> */}
            </div>
          </div>

          <div id="w-node-509be705858e-184c63d4" className="contact-form-wrap">
            <div className="contact-form-heading-wrap">
              <h2 className="contact-heading">{applyTitle}</h2>
              <div className="paragraph-light">{applySubtitle}</div>
            </div>

            <div className="contact-form w-form">
              <Content source={applyBody} />
              <Link to="/apply" className="Button contact-apply-button">
                {applyButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
